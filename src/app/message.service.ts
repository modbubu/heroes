import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  showMessage (mesage:string) {
    alert("Mesage: " + mesage);
  }

}
