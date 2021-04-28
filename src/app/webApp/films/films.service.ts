import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'
import { Films } from './films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  //1- props ou states


  //2-constuctor
  constructor(private _http: HttpClient) { }

  //3-methode
  public getFilms(): Observable<Films[]> {
    return this._http.get<Films[]>('https://dev.webjs.fr/films.json').pipe(
      tap(
        (responseHTTP) => {
          console.log('responseHTTP => ', responseHTTP);
          
        }
      ),
      map(
        (datas) => {
          return datas.filter(
            (data) => {
              return data.id >= 5
            }
          )
        }
      )
    )
  }
}
