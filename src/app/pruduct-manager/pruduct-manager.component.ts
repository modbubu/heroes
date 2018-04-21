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
      rows: 2,
      pageList: []
    };
   }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.dataService.getList()
    .subscribe(res => {
      this.dataList = <Product []> res;

      this.paginationHandle();
      
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
      });
    }
  }

  selectRow(product) {
    this.selectedRow = product;
  }

  paginationHandle( index?: any) {

    if(index == "...")
      return;

    let len = this.dataList.length;
    let pages = Math.ceil(len/this.paginator.rows);

    if(index == undefined) {
    this.paginator.pages = pages;
    
    if (pages > 0) {
      this.paginator.currentPage = 1;
    }
  }
  else {
    this.paginator.currentPage = index;
  }

  
  if ( pages > 6 ){
    let midIndex = Math.ceil(pages/2);
    if (this.paginator.pageList.length > 0) {
      
      if(this.paginator.currentPage < midIndex) {
        this.paginator.pageList[0] = this.paginator.currentPage - 1;
        this.paginator.pageList[1] = this.paginator.currentPage;
        this.paginator.pageList[2] = this.paginator.currentPage + 1;
        if (this.paginator.pageList[0] <= 0) {
          this.paginator.pageList[0] = 1;
          this.paginator.pageList[1] = 2;
          this.paginator.pageList[2] = 3;
        }
      }
      else {
        if (this.paginator.currentPage > midIndex && this.paginator.currentPage < pages) {
          this.paginator.pageList[4] = this.paginator.currentPage - 1;
          this.paginator.pageList[5] = this.paginator.currentPage;
          this.paginator.pageList[6] = this.paginator.currentPage + 1;
          if (this.paginator.pageList[4] <= midIndex) {
            this.paginator.pageList[4] = midIndex + 1;
            this.paginator.pageList[5] = midIndex + 2;
            this.paginator.pageList[6] = midIndex + 3;
          }
        }
      }
    }
      else {
        this.paginator.pageList.push(1, 2, 3);
        this.paginator.pageList.push("...");
        this.paginator.pageList.push(midIndex + 1, midIndex + 2, midIndex + 3);
      }

    }
    else {
      for (let i = 1; i <= pages; i++){
        this.paginator.pageList.push(i);
      }
    }

    let currentData = [];
    let currentIndex = (this.paginator.currentPage - 1)*this.paginator.rows;

    for( let i = currentIndex; i < this.dataList.length; i++) {
      if(currentData.length == this.paginator.rows)
      break;
      currentData.push(this.dataList[i]);
    }
  
    this.currentDataList = <Product []> currentData;
  } 
}
