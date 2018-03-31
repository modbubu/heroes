import { Component, OnInit, Output, Input,EventEmitter } from '@angular/core';

interface FlowerData{
  name: string,
  img: string,
  decription: string,
  price: number
}


@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  @Input() flower: FlowerData
  @Output() onDetail = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.onDetail.emit(this.flower.name);
  }

}
