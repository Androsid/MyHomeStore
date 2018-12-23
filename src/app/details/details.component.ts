import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimulateDbService } from '../simulate-db.service';
import { Goods } from '../goods/goods';
import { FormControl, Validators } from '@angular/forms'; // need to import ReactiveFormsModule
import { HttpClient } from '@angular/common/http';

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

  constructor(private simulateDbService: SimulateDbService, private http: HttpClient) {
    console.log("DetailsComponent constructor");
  }

  ngOnInit() {
    this.getGoods();
  }
  Qty = new FormControl('', [Validators.required]);


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


  selectedFile : File = null;
  onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('http://localhost:3000/upload', fd)
      .subscribe(res => {
        console.log(res);
      });

  }
}
