import { Component } from '@angular/core';
import { Goods } from './goods/goods';

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

  public onAClicked(categoryName){
    console.log(categoryName);
    this.categoryName = categoryName;
  }

  public onAClickedCategoryId(categoryId){
    console.log(categoryId);
    this.categoryId = categoryId;
  }

  onAClickedgoodFromGoodsComponent(goodFromGoodsComponent){
    console.log("onAClickedCategoryId " + goodFromGoodsComponent);
    this.goodFromGoodsComponent = goodFromGoodsComponent;
  }
}
