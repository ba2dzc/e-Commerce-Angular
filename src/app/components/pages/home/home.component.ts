import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT:{[id:number]:number}={1:400,3:355,4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cols=3;
  category:string|undefined
  rowHeight=ROWS_HEIGHT[this.cols]
  constructor() { }
  
  ngOnInit() {
  }
 onColumnsCountChange(colsNum:number):void{
  this.cols=colsNum
  this.rowHeight=ROWS_HEIGHT[this.cols]
 }

 onShowCategory(newCategory:string):void{
  console.log("çalışıyor")
  this.category=newCategory;
 }
}
