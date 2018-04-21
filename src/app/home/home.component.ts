import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  maumoi = {
    type: "maumoi",
    title: "Sản Phẩm Mới"
  }

  banchay = {
    type: "banchay",
    title: "Sản Phẩm Bán Chạy"
  }

  hoatuoi = {
    type: "hoatuoi",
    title: "Hoa Tươi"
  }

  constructor(router: ActivatedRoute) {
    console.log(router)
  }

  ngOnInit() {
  }

}
