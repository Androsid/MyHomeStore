import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Goods } from '../goods/goods';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const simDb = [
      
          {
            "id": 1,
            "name": "Coat Blue",
            "price": 60,
            "categoryId": 1,
            "Qty": 10
          },
          {
            "id": 2,
            "name": "Coat red",
            "price": 70,
            "categoryId": 1,
            "Qty": 10
          },
          {
            "id": 3,
            "name": "Coat green",
            "price": 70,
            "categoryId": 1,
            "Qty": 10
          },
          {
            "id": 4,
            "name": "Sled Blue",
            "price": 70,
            "categoryId": 2,
            "Qty": 10
          },
          {
            "id": 5,
            "name": "Sled dirty",
            "price": 7,
            "categoryId": 2,
            "Qty": 10
          },
          {
            "id": 6,
            "name": "Sled red",
            "price": 70,
            "categoryId": 2,
            "Qty": 10
          },
          {
            "id": 7,
            "name": "Hat red",
            "price": 70,
            "categoryId": 4,
            "Qty": 12
          },
          {
            "id": 8,
            "name": "Coat red",
            "price": 70,
            "categoryId": 1,
            "Qty": 23
          },
          {
            "id": 9,
            "name": "Coat new",
            "price": 70,
            "categoryId": 1,
            "Qty": 6
          },
          {
            "id": 10,
            "name": "Coat dirty",
            "price": 10,
            "categoryId": 1,
            "Qty": 3
          },
          {
            "id": 11,
            "name": "Coat second hand",
            "price": 70,
            "categoryId": 1,
            "Qty": 20
          }

    ]
    return {simDb};
  }

  genId(goods: Goods[]): number {
    return goods.length > 0 ? Math.max(...goods.map(good => good.id)) + 1 : 11;
  }

  constructor() { }
}
