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

  onPageChanged(){
    this.loadPage();
  }

  clickedRow(events){
    console.log(events);
  }

  private loadPage(){
    this.resourcesLoaded = false;
    this.simulateDbService.getCategories(this.page, this.itemsPerPage, this.categoryId)
    .subscribe(p => {
      this.goods = p.rows;
      this.collectionSize = p.totalCount;
      this.resourcesLoaded = true;
    });
  }

/*   getGoods(): void {
    this.simulateDbService.getGoods()
    .subscribe(good => {
      this.goods = good;
      this.goods = this.goods.filter(g => g.categoryId == this.categoryId);
      //this.collectionSize = this.filteredGoods.length;
      });
  } */
}
