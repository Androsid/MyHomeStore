import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GoodsComponent } from './goods/goods.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './catalog/tree/tree.component';

import { HttpClientModule } from '@angular/common/http';
import { SimulateDbService } from './simulate-db.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageService } from './shared/upload-image.service';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    GoodsComponent,
    DetailsComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule, //this module includes the progress indicator component that we will be using to indicate that data is being loaded from the backend
    NgbModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    //remove this after real API done
/*     HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) */
  ],
  providers: [SimulateDbService, UploadImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
