import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyStore';

  categoryName :string = "";
  categoryId:number = 0;

  public onAClicked(categoryName){
    console.log(categoryName);
    this.categoryName = categoryName;
  }

  public onAClickedCategoryId(categoryId){
    console.log(categoryId);
    this.categoryId = categoryId;
  }
}
