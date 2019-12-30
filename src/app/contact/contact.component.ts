import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private conserv:ContactService) { }
  exform: FormGroup;
  names:string;
  emails:string;
  phones:string;
  addressa:string;

  ngOnInit() {
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'address' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }

  clicksub(){
    console.log(this.exform.value);
    this.names = this.exform.value.name;
    this.emails = this.exform.value.email;
    this.addressa = this.exform.value.address;
    this.phones = this.exform.value.phone;
     // sending the  value to server for login verificaion
   const url =  'website/adminlogin';
   const param = new FormData();
   param.append('name', this.names);
   param.append('phone', this.phones);
   param.append('address',this.addressa);
   param.append('email',this.emails);
   this.conserv.addContact(param).subscribe((data: any) => {
     console.log(data.name);
     });
  }

  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get address() {
    return this.exform.get('address');
  }

}
