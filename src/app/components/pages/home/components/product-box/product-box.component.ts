import { visitAll } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullwidthMode=false;
  @Output() addToCart=new EventEmitter();

  product:Product | undefined ={
    id:1,
    title:'gloves',
    price:100,
    category:'gloves',
    description:'description',
    image:'https://via.placeholder.com/150'
  }

  constructor() { }

  ngOnInit() {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product)
  }

}
