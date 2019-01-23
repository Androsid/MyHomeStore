import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UploadImageService {

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File) {
    const formData: any = new FormData();
    const files: File = fileToUpload;
    var newgoodUrl:string = "";
    formData.append("uploads", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .subscribe(files => {
        console.log('files ', files);
        newgoodUrl = 'uploads/' + files[0].filename; //вот тут присваиваем путь к картинке

      });

      return newgoodUrl;
  }

  test() {
    const endpoint = 'http://localhost:3000/upload';
    return this.http
      .get(endpoint);
  }

}
