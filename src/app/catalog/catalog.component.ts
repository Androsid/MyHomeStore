import { Component, Output, EventEmitter } from '@angular/core';
import { treesConst } from './tree/tree-data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {


  treesData = treesConst;

  categoryName:string = "";
  categoryId:number = 0;
  @Output() clickCategoryName: EventEmitter<string> = new EventEmitter();
  @Output() clickCategoryId: EventEmitter<number> = new EventEmitter();
  @Output() eventUpdateTableFromCatalog = new EventEmitter();

  public clickMe(categoryName, categoryId){
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    this.clickCategoryName.emit(this.categoryName);
    this.clickCategoryId.emit(this.categoryId);
    
    setTimeout(() => {
      this.eventUpdateTableFromCatalog.emit(null)
    }, 100);
  }
}
