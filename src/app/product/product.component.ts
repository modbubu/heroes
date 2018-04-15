import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

interface product {
  id: number,
  name: string,
  type: string,
  price: number,
  img: string,
  description: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data?: product;

  title = "Tạo Mới Sản Phẩm"
  isCreate: boolean;

  constructor(private dataService: DataService, activeRoute: ActivatedRoute) { 
    this.data = {
      id: 0,
      name: "",
      type: "",
      price: 0,
      img: "",
      description: ""
    }

    this.isCreate = true;

    if(activeRoute.snapshot.queryParams.id != undefined)
    {
      this.isCreate = false;
      this.title="update sản phẩm";
      this.dataService.getOne(activeRoute.snapshot.queryParams.id)
      .subscribe(res =>{
        console.log(res)
        if(res && res[0])
        this.data = <product>res[0];
      });
    }
  }


  ngOnInit() {
  }

  editProduct() {
    this.dataService.updateData(this.data.id, this.data)
      .subscribe(res =>{
        // console.log(999, res)
        window.location.assign("/product-management");
      });
  }

  createProduct() {
    this.dataService.insertData(this.data)
      .subscribe(res => {
        console.log(888, res)

        window.location.assign("/product-management");
      });
  }

  onClick() {
    let isValidate = this.validate();
    if (this.isCreate == true) {
      if (isValidate) {
      this.createProduct();
    } else {
      alert( "Invalid.");
    } 
    }
      else {
        this.editProduct();
      }
  }

  //Validate data
  validate() {
    let isValidate = true;
    for(let i in this.data) {
        if(this.data[i] === "") {        // dấu 3 châm là dâu so sánh kiểu dữ liệu data users string or number
          isValidate = false;
          break;
        }
    }

    return isValidate;
  }

}
