import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { GoodsComponent } from './components/goods/goods.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './components/catalog/tree/tree.component';

import { HttpClientModule } from '@angular/common/http';
import { DbService } from './services/db.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadImageService } from './services/upload-image.service';

import { MobxAngularModule } from 'mobx-angular';
import { GoodsStore } from './store/app.store';

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
    MobxAngularModule
    //remove this after real API done
/*     HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) */
  ],
  providers: [DbService, UploadImageService, GoodsStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
