import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-maumoi',
  templateUrl: './maumoi.component.html',
  styleUrls: ['./maumoi.component.css'],

})
export class MaumoiComponent implements OnInit {

  flowerList:object [];
  title = "Hoa Bán Chạy";
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getList("maumoi")
      .subscribe(res => {this.flowerList=<object []>res;});
  }

}
