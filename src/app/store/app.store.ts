import { Injectable } from '@angular/core';
import { action, observable, computed } from 'mobx';
import { DbService } from '../services/db.service';

export class Good {
  name: string;
  price: number;
  categoryId: number;
  Qty: number;
  id?: number;
  url?: string;

  constructor({ name, price = null, categoryId = null, Qty = null, id = null, url = '' }) {
    this.name = name,
    this.price = price,
    this.categoryId = categoryId,
    this.Qty = Qty,
    this.id = id,
    this.url = url
  }
}

@Injectable()
export class GoodsStore {
  @observable goods;
  @observable filter;
  @observable page;
  @observable categoryName;

  constructor(private dbService: DbService) {
    this.goods = [];
    this.page = 1;
    console.log("constructor " + this.page);
    this.fetch();
  }

  @action addGood(good) {
    this.dbService.addGood(good).subscribe();
    console.log("addGood");
  }

  @action removeGood(good) {
    const index = this.goods.indexOf(good);
    this.goods.splice(index, 1);

    this.dbService.deleteGood(good).subscribe();
    console.log("removeTodo " + good.id);

  }

  @action fetch() {
    fetch('http://localhost:3001/events/')
      .then(res => res.json())
      .then(json => this.putGoods(json))
      .catch(e => console.log(e));
  }

  @action putGoods(goods) {
    let userArray = [];
    goods.forEach(good => {
      userArray.push(new Good(good));
    });
    this.goods = userArray;
    console.log(this.goods);
  }

  @computed get storeGoods() {
    return this.goods;
  }

  @computed get filteredStoreGoods(){
    let filteredArray = this.goods.filter(arr => arr.categoryId == this.filter);
    return filteredArray;
  }

  @computed get filtForPaginStoreGoods(){
    let startIndex = 5 * (this.page -1);
    let filteredArray = this.goods.filter(arr => arr.categoryId == this.filter);
    return filteredArray.slice(startIndex, startIndex + 5);
  }

  @computed get counterGoods(){
    return this.filteredStoreGoods.length;
  }

  @action toggleComplete(good: Good) {
    this.goods = this.goods.map(currentTodo => {
      if (currentTodo === good) {
        return {
          ...currentTodo,
          completed: !currentTodo.completed
        }
      }
      return currentTodo;
    });
  }

  @action updateGood(good){
    this.dbService.updateGood(good).subscribe();
    console.log("updateGood " + good.id, "good url "+ good.url);
  }

}