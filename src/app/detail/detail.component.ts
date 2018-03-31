import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  flowerList:object [];
  title = "Hoa Bán Chạy";
  constructor() { }

  flower = {color: 'blue'}

  ngOnInit() {
    this.flowerList = [
      {
        name: "Hoa Sen",
        price: "40.000đ",
        img: "assets/hoa/hoa1.jpg",
        description: "Thanh Khiết"
      },
      {
        name: "Hoa Hồng",
        price: "50.000đ",
        img: "assets/hoa/hoa1.jpg",
        description: "Ngọt ngào, nồng thấm"
      },
      {
        name: "Hoa Păng-Xê",
        price: "70.000đ",
        img: "assets/hoa/hoa1.jpg",
        description: "Mê hoặc, Quyến rũ"
      },
      {
        name: "Hoa Sen",
        price: "40.000đ",
        img: "assets/hoa/hoa1.jpg",
        description: "Thanh Khiết"
      },
    ]
  }

  onDetail(flowerName:string) {
    alert("Selected: " + flowerName)
  }

}
