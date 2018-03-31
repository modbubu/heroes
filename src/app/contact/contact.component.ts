import { Component, OnInit } from '@angular/core';
  interface ContactData {
    hoten:string;
    email:string;
    chude: string;
    noidung: string;
  }
  
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = "Liên Hệ"
  public data: ContactData;
  constructor() {
    this.data = {
    hoten: "",
    email: "",
    chude: "",
    noidung: ""
  }
}
  

  ngOnInit() {
  }

  onClick() {
    let resultString = "Họ tên: " + this.data.hoten + "\n";
    resultString += "Email: " + this.data.email + "\n";
    resultString += "Chủ đề: " + this.data.chude + "\n";
    resultString += "Nội dung: " + this.data.noidung +"\n"
    
    alert (resultString);
  }

}
