import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SimulateDbService } from '../simulate-db.service';
import { Goods } from '../goods/goods';
import { FormControl, Validators } from '@angular/forms'; // need to import ReactiveFormsModule
import { HttpClient } from '@angular/common/http';
import { UploadImageService } from '../shared/upload-image.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [UploadImageService]
})
export class DetailsComponent implements OnInit {

  @Output() eventUpdateTableFromDetails = new EventEmitter();

  @Input() categoryId: number;

  @Input() goodFromGoodsComponent: Goods;

  //imageUrl: string = "/assets/images/placeholder-image.png";
  imageUploaded: boolean;

  public goods: Goods[];
  public simDbsUrl: Array<any>;

  constructor(private simulateDbService: SimulateDbService,
    private http: HttpClient,
    private imageService: UploadImageService) {
    console.log("DetailsComponent constructor");
    this.imageUploaded = false;
  }

  ngOnInit() {
    this.getGoods();
  }
  Qty = new FormControl('', [Validators.required]);


  newgood: Goods = {
    name: "xz",
    price: 24,
    categoryId: 1,
    Qty: 42,
    url: ""
  };

  addGood(goodName, goodPrice, goodCategoryId, goodQty) {

    this.newgood.name = goodName;
    this.newgood.price = goodPrice;
    this.newgood.categoryId = goodCategoryId;
    this.newgood.Qty = goodQty;
    console.log(this.newgood);
    this.simulateDbService.addGood(this.newgood)
      .subscribe(good => this.goods.push(good));

    this.eventUpdateTableFromDetails.emit(null);
  }

  updateGood(goodName, goodPrice, goodCategoryId, goodQty) {
    let updatedgood = {
      name: "",
      price: null,
      categoryId: null,
      Qty: null,
      url: "uploads/uploads-1545900273844..png",
      id: null
    };
    updatedgood.name = goodName;
    updatedgood.price = goodPrice;
    updatedgood.categoryId = goodCategoryId;
    updatedgood.Qty = goodQty;
    updatedgood.url = this.goodFromGoodsComponent.url;
    updatedgood.id = this.goodFromGoodsComponent.id;
    console.log(updatedgood);
    this.simulateDbService.updateGood(updatedgood)
      .subscribe();

    this.eventUpdateTableFromDetails.emit(null);
  }

  getGoods(): void {
    this.simulateDbService.getGoods()
      .subscribe(good => this.goods = good);
  }

  filesToUpload: File = null;
  upload() {
    const formData: any = new FormData();
    const files: File = this.filesToUpload;

    formData.append("uploads", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .subscribe(files => {
        console.log('files ', files);
        this.newgood.url = 'uploads/' + files[0].filename; //вот тут присваиваем путь к картинке
        //this.newgood.url = files[0].path; //вот тут присваиваем путь к картинке
        this.imageUploaded = true;
      })
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files;

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      //this.imageUrl
      this.goodFromGoodsComponent.url = event.target.result;
    }
    reader.readAsDataURL(fileInput.target.files.item(0));
    this.upload();
  }
}
