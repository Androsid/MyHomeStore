import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadImageService {

  constructor(private http: HttpClient) { }

  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:3000/upload';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption); //не нужен
    console.log("formdata: " + JSON.stringify(formData));
    return this.http
      .post(endpoint, formData);
  }

  test() {
    const endpoint = 'http://localhost:3000/upload';
    return this.http
      .get(endpoint);
  }

}
