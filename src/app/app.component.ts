import { Component } from '@angular/core';
import { Goods } from './models/goods';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categoryName :string = "";
  categoryId:number = 0;
  goodFromGoodsComponent: Goods = {
    name: "",
    price: null,
    categoryId: null,
    Qty: null,
    url: "/assets/images/placeholder-image.png",
    id: null
  };

  onAClickedgoodFromGoodsComponent(goodFromGoodsComponent){
    console.log("onAClickedCategoryId ");
    this.goodFromGoodsComponent = goodFromGoodsComponent;
  }
}
