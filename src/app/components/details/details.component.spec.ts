import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DbService } from '../../services/db.service';
import { UploadImageService } from '../../services/upload-image.service';
import { GoodsComponent } from '../goods/goods.component';

describe('DetailsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, GoodsComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatProgressSpinnerModule, //this module includes the progress indicator component that we will be using to indicate that data is being loaded from the backend
        NgbModule.forRoot(),
        MatInputModule,
        MatFormFieldModule
      ],
      providers: [DbService, UploadImageService] 
    })
    .compileComponents();
  }));

  it('should be created', () => {
    let fixture = TestBed.createComponent(DetailsComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
