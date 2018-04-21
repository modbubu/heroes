import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { DataService } from '../data.service';
import { ActivatedRoute }  from '@angular/router';
// import { Input } from '@angular/core';

interface Infomation {
  title: string,
  type: string
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  flowerList:object [];

  @Input() info?: Infomation;

  
  constructor(router:ActivatedRoute ,private messageService: MessageService, private dataService: DataService) { 
    
    console.log(router)
    if(router && router.snapshot.data) {
      this.info = {type: "", title: ""};
      this.info.title = router.snapshot.data.title;
      this.info.type = router.snapshot.data.type;

    }
  }

  ngOnInit() {
    this.dataService.getList(this.info.type)
      .subscribe(res =>{this.flowerList=<object[]>res;});
  }

  onDetail(flowerName:string) {
    alert("Selected: " + flowerName)
    // this.messageService.showMessage(flowerName);
  }

}
