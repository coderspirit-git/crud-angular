
import { ContactService } from './../service/contact.service';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-displaycard',
  templateUrl: './displaycard.component.html',
  styleUrls: ['./displaycard.component.css']
})
export class DisplaycardComponent implements OnInit {
  @Input('fun') lin:any;
  @Output() deleted = new EventEmitter();

  constructor(private cons:ContactService) { }

  ngOnInit() {
  }
  delete(id){
    this.cons.deleteContact(id).subscribe((data:any)=>{
      console.log(data);
      this.deleted.emit()
    });

  }

}
