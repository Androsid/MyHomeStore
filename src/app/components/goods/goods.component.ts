import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goods } from '../../models/goods';
import { GoodsStore, Good } from 'src/app/store/app.store';
import { Observable } from 'rxjs';
import { fromMobx } from 'ngx-mobx';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @Output() clickCategoryId: EventEmitter<number> = new EventEmitter();
  @Output() goodFromGoodsComponent: EventEmitter<Goods> = new EventEmitter();

  public page: number;

  public collectionSize: number;

  public itemsPerPage: number = 5;
  resourcesLoaded: boolean;

  goods: Observable<Good>;

  constructor(public _goodsStore: GoodsStore) {
    this.page = 1;
    console.log("GoodsComponent collectionSize " + this._goodsStore.counterGoods);
  }

  ngOnInit() {
    this.goods = fromMobx(() => this._goodsStore.filtForPaginStoreGoods);
  }

  onPageChanged() {
    this.loadPage();
  }

  deleteRow(good) {
    this._goodsStore.removeGood(good);
    this.loadPage();
  }
  editRow(good) {
    console.log(good);
    this.goodFromGoodsComponent.emit(good);
  }

  private loadPage() {
    this.resourcesLoaded = false;
    setTimeout(() => {
      this._goodsStore.page = this.page;
      this.collectionSize = this._goodsStore.counterGoods;
      console.log(this.page + " col size " + this.collectionSize);
      this.resourcesLoaded = true;
    }, 500); //От этого таймаута надо избавиться! Он тут временно
  } 

  newGood(){
    let emptyGood: Goods = {
      name: "",
      price: null,
      categoryId: this._goodsStore.filter,
      Qty: null,
      url: "/assets/images/placeholder-image.png",
      id: null
    };
    this.goodFromGoodsComponent.emit(emptyGood);
  }
}
