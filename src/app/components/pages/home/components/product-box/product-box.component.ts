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
  @Input() product:Product | undefined;


  constructor() { }

  ngOnInit() {
  }

  onAddToCart():void{
    this.addToCart.emit(this.product)
  }

}
