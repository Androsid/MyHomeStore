import { TestBed, inject } from '@angular/core/testing';

import { UploadImageService } from './upload-image.service';
import { HttpClientModule } from '@angular/common/http';

describe('UploadImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadImageService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([UploadImageService], (service: UploadImageService) => {
    expect(service).toBeTruthy();
  }));
});
