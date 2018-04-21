import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getOne(id: number){
    return this.httpClient.get("http://localhost:3000/products?id=" + id);
  }

  getList(type?: string) {
    if(type !=undefined){
      return this.httpClient.get("http://localhost:3000/products?type=" + type);
  }
    else{
      return this.httpClient.get("http://localhost:3000/products");
  }}
  
  insertData (data:object) {
    return this.httpClient.post("http://localhost:3000/products",data);
  }
  updateData (id:number,data:object){
    return this.httpClient.put("http://localhost:3000/products/"+ id,data);
  }
  removeData (id: number){
    return this.httpClient.delete("http://localhost:3000/products/"+ id);
  }
}
