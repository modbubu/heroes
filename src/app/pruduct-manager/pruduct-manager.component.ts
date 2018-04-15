import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

interface Product {
  name: string;
  type: string;
  price: number;
  img: string;
  description: string
}

@Component({
  selector: 'app-pruduct-manager',
  templateUrl: './pruduct-manager.component.html',
  styleUrls: ['./pruduct-manager.component.css']
})
export class PruductManagerComponent implements OnInit {

  title = "Quản lý Sản Phẩm";
  public dataList: Product [];
  public currentDataList: Product [];
  
  selectedRow: any;
  
  paginator: any;

 

  constructor(private dataService: DataService) {
    this.paginator = {
      pages: 0,
      currentPage: 0,
      rows: 10
    }
   }

  ngOnInit() {
    // this.getList();
  }

  getList() {
    this.dataService.getList()
    .subscribe(res => {
      this.dataList = <Product []> res;
      
    });
  }

  create(event) {
    window.location.assign("/product");
  }

  edit(evemt) {
    if(this.selectedRow) {
      window.location.assign("/product?id=" + this.selectedRow.id);
    }
  }

  remove(event) {
    if(this.selectedRow) {
      this.dataService.removeData(this.selectedRow.id)
      .subscribe(res => {
        this.getList();
      })
    }
  }

  selectRow(product) {
    this.selectedRow = product;
  }

  pagenationHandle( index: any) {
    let len = this.dataList.length;
    let pages = Math.ceil(len/this.paginator.rows);

    if(this.paginator.pages == 0) {
    this.paginator.pages = pages;
    
    if (pages > 0) {
      this.paginator.currentPage = 1;
    }
  }
  else {
    this.paginator.currentPage = index;
  }

  //paginator temp
  let pageList = [];
  if ( pages > 6 ){

    

    if(this.paginator.currentPage > pages - 3) {
      console.log("debug")
      pageList.push(1, 2, 3);
      pageList.push("...");
      pageList.push(this.paginator.pages - 2, this.paginator.pages -1,)
    }
    pageList.push(this.paginator.currentPage);
    pageList.push(this.paginator.currentPage + 1);
    pageList.push(this.paginator.currentPage + 2);
    pageList.push("...");
    pageList.push(this.paginator.pages - 2, this.paginator.pages - 1);
  }
    else {
      for(let i = 1; i <= pages; i++) {
        pageList.push(1);
      }
    }

    this.paginator.pageList = pageList;


    let currentData = [];
    let currentIndex = (this.paginator.currentPage - 1 )*this.paginator.rows;

    for (let i = currentIndex; i < this.dataList.length ; i ++ ) {
      if (currentData.length == this.paginator.rows)
      break;
      currentData.push(this.dataList[i]);
    }

    this.currentDataList = <Product []> currentData; 
  }
}
