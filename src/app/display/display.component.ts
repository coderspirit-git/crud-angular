import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private cons:ContactService) { }
  lino:any;

  ngOnInit() {
    this.cons.getContact().subscribe((data:any)=>{
      console.log(data);
      this.lino = data;
    })
  }
  linoo(){
    this.cons.getContact().subscribe((data:any)=>{
      console.log(data);
      this.lino = data;
    })
  }

}
