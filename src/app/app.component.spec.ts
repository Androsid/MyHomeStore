import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DetailsComponent } from './components/details/details.component';
import { GoodsComponent } from './components/goods/goods.component';
import { MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DbService } from './services/db.service';
import { UploadImageService } from './services/upload-image.service';
import { TreeComponent } from './components/catalog/tree/tree.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CatalogComponent,
        DetailsComponent,
        GoodsComponent,
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
        MatFormFieldModule
      ],
      providers: [DbService, UploadImageService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should create the CatalogComponent`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let appComponent = fixture.debugElement.query(By.directive(CatalogComponent));
    expect(appComponent).toBeTruthy();
  }));
  it('should create the DetailsComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let appComponent = fixture.debugElement.query(By.directive(DetailsComponent));
    expect(appComponent).toBeTruthy();
  }));
  it('should create the GoodsComponent', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    let appComponent = fixture.debugElement.query(By.directive(GoodsComponent));
    expect(appComponent).toBeTruthy();
  }));
});
