import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimulateDbService } from '../simulate-db.service';
import { Goods } from './goods';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  @Input() categoryName: string;
  @Input() categoryId: number;
  @Output() clickCategoryId: EventEmitter<number> = new EventEmitter();
  @Output() goodFromGoodsComponent: EventEmitter<Goods> = new EventEmitter();

  public page: number;

  public collectionSize: number;

  public goods: Goods[];
  filteredGoods: Goods[];

  public itemsPerPage: number = 5;
  resourcesLoaded: boolean;

  constructor(private simulateDbService: SimulateDbService) {
    this.page = 1;
    this.loadPage();
    console.log("GoodsComponent " + this.categoryId);
  }

  ngOnInit() {
    this.loadPage();
  }

  onPageChanged() {
    this.loadPage();
  }

  deleteRow(good) {
    this.simulateDbService.deleteGood(good).subscribe();
    this.loadPage();
  }
  editRow(good) {
    console.log(good);
    this.goodFromGoodsComponent.emit(good);
  }

  private loadPage() {
    this.resourcesLoaded = false;
    setTimeout(() => {
      this.simulateDbService.getCategories(this.page, this.itemsPerPage, this.categoryId)
        .subscribe(p => {
          this.goods = p.rows;
          this.collectionSize = p.totalCount;
          this.resourcesLoaded = true;
        });
    }, 500); //От этого таймаута надо избавиться! Он тут временно
  }

  newGood(){
    let emptyGood: Goods = {
      name: "",
      price: null,
      categoryId: null,
      Qty: null,
      url: "/assets/images/placeholder-image.png",
      id: null
    };
    this.goodFromGoodsComponent.emit(emptyGood);
  }
}
