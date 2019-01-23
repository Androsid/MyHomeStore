import { Component, Output, EventEmitter } from '@angular/core';
import { treesConst } from './tree/tree-data';
import { GoodsStore } from 'src/app/store/app.store';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  constructor(private _goodsStore: GoodsStore) {
  }

  treesData = treesConst;

  categoryName:string = "";
  categoryId:number = 0;

  @Output() eventUpdateTableFromCatalog = new EventEmitter();

  public clickMe(categoryName, categoryId){
    
    this._goodsStore.filter = categoryId;
    this._goodsStore.categoryName = categoryName;
    
    setTimeout(() => {
      this.eventUpdateTableFromCatalog.emit(null)
    }, 100);
  }
}
