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

  imageUrl: string = "/assets/images/placeholder-image.png";
  

  public goods: Goods[];
  public simDbsUrl: Array<any>;

  constructor(private simulateDbService: SimulateDbService,
    private http: HttpClient,
    private imageService: UploadImageService) {
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

  getGoods(): void {
    this.simulateDbService.getGoods()
      .subscribe(good => this.goods = good);
  }

/*   selectedFile: File = null;
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption, Image) {
    this.imageService.postFile(Caption.value, this.fileToUpload).subscribe(
      data => {
        console.log('done ' + this.fileToUpload.name);
        //Caption.value = null;
        //Image.value = null;
        this.imageUrl = "/assets/images/placeholder-image.png";
      }
    );

    
  } */

  //delete after testing
  test() {
    var res = this.imageService.test().subscribe();
    console.log(res);
  }

  filesToUpload: File = null;

  upload() {
    const formData: any = new FormData();
    const files: File = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .subscribe(files => {
        console.log('files', files);
        this.newgood.url = files[0].path;
      })
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files;

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(fileInput.target.files.item(0));
  }
}
