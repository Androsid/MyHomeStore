import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { TablePage } from '../models/tablePage';
import { Goods } from '../models/goods';

@Injectable()
export class DbService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private simDbsUrl = "http://localhost:3001/events/";

  public getCategories(page: number, itemsPerPage: number, categoryId: number): Observable<TablePage>{
    var simDbsUrl = this.httpClient.get<TablePage>(this.simDbsUrl); //получаем весь массив данных
    console.log("getCategories categoryId " + categoryId);
    return this.getPageItems(simDbsUrl, page, itemsPerPage, categoryId); //возвращяем уже отфильтрованный массив с нужными данными для пагинации
  }

  addGood (good: Goods): Observable<Goods> {
    return this.httpClient.post<Goods>(this.simDbsUrl, good).pipe(
      tap((good: Goods) => console.log(`added good w/ id=${good.id}`, good)),
      catchError(this.handleError<Goods>('addGood'))
    );
  }
  updateGood (good: Goods): Observable<Goods> {
    return this.httpClient.put<Goods>(this.simDbsUrl + good.id, good).pipe(
      tap((good: Goods) => console.log(`update good w/ id=${good.id}`, good)),
      catchError(this.handleError<Goods>('updateGood'))
    );
  }
  getGoods (): Observable<Goods[]> {
    return this.httpClient.get<Goods[]>(this.simDbsUrl)
      .pipe(
        tap(_ => console.log('fetched goods')),
        catchError(this.handleError('getGoods', []))
      );
  }

  deleteGood(good: Goods) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.simDbsUrl}/${good.id}`;

    return this.httpClient.delete<Goods>(url).pipe(catchError(this.handleError('deleteGoods', [])));
  }

  public getPageItems(simDbsUrl: Observable<TablePage>, page: number, itemsPerPage: number, categoryId: number): Observable<TablePage>{
    return simDbsUrl.pipe(
      map(u => {
        var startIndex = itemsPerPage * (page -1);
        console.log("getPageItems categoryId " + categoryId);

        let filteredArray = this.arrfilter(u, categoryId); //фильтруем по категориям сразу

        return new TablePage(filteredArray.length, filteredArray.slice(startIndex, startIndex + itemsPerPage));
      })
    );
  }

  private arrfilter(filteredArray, categoryId){
    console.log("arrfilter categoryId " + categoryId);
    return filteredArray.filter(arr => arr.categoryId == categoryId)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
