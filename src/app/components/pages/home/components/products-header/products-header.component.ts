import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange=new EventEmitter<number>();
  sort="desc"
  itemShowCount=12;
  constructor() { }

  ngOnInit() {
  }

  onSortUpdate(newSort:string):void{
    this.sort=newSort;
  }

  onItemsUpdate(count:number):void{
    this.itemShowCount=count;
  }

  onColumnsUpdate(colsNum:number):void{
    this.columnsCountChange.emit(colsNum)
  }
}
