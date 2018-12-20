import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { GoodsComponent } from './goods/goods.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { TreeComponent } from './catalog/tree/tree.component';

import { HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data-service';
import { SimulateDbService } from './simulate-db.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    HttpClientModule,
    NgbModule.forRoot(),

    //remove this after real API done
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [SimulateDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
