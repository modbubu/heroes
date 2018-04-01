import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  flowerList: object [];

  constructor() { }

  getList() {
    this.flowerList = [
    [
      {
        name: "Hoa Sen",
        price: "40.000đ",
        img: "/src/assets/hoa/hoa1.jpg",
        description: "Thanh Khiết"
      },
      {
        name: "Hoa Hồng",
        price: "50.000đ",
        img: "/src/assets/hoa/hoa1.jpg",
        description: "Ngọt ngào, nồng thấm"
      },
      {
        name: "Hoa Păng-Xê",
        price: "70.000đ",
        img: "/src/assets/hoa/hoa1.jpg",
        description: "Mê hoặc, Quyến rũ"
      },
      {
        name: "Hoa Sen",
        price: "40.000đ",
        img: "/src/assets/hoa/hoa1.jpg",
        description: "Thanh Khiết"
      },
    ]
    ];
    return this.flowerList;
  }

}
