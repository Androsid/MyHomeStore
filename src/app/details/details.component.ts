import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimulateDbService } from '../simulate-db.service';
import { Goods } from '../goods/goods';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Output() eventUpdateTableFromDetails = new EventEmitter();

  @Input() categoryId: number;
  
  public goods: Goods[];
  public simDbsUrl: Array<any>;

  constructor(private simulateDbService: SimulateDbService) {
    console.log("DetailsComponent constructor");
  }

  ngOnInit() {
    this.getGoods();
  }

  newgood = {
    name: "xz",
    price: 24,
    categoryId: 1,
    Qty: 42};

  addGood(goodName, goodPrice, goodCategoryId, goodQty){
    this.newgood.name = goodName;
    this.newgood.price = goodPrice;
    this.newgood.categoryId = goodCategoryId;
    this.newgood.Qty = goodQty;
    console.log(this.newgood);
    this.simulateDbService.addGood(this.newgood)
    .subscribe(good => this.goods.push(good));

    this.eventUpdateTableFromDetails.emit(null);
  }

  getGoods(): void {
    this.simulateDbService.getGoods()
    .subscribe(good => this.goods = good);
  }
}
