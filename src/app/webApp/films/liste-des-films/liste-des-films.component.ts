import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { FilmsService } from '../films.service';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { Films } from '../films';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit, OnDestroy {
  public stateFilms: Films[];
  stateSubscription: Subscription = new Subscription;

  constructor(
    private _http: HttpClient,
    private _zoneJs: NgZone,
  ) {  
    this.stateFilms = [];
  }

  ngOnInit(): void {
    const ajax$: Observable<any> = forkJoin({
      collectionFilm1: ajax.getJSON('https://dev.webjs.fr/films.json') as Observable<Films>,
      collectionFilm2: ajax.getJSON('https://dev.webjs.fr/films2.json') as Observable<Films>,
    })

    ajax$.subscribe(
      (datas: any) => {
        let rst: any = datas.collectionFilm1.concat(datas.collectionFilm2);
        this.stateFilms = rst;
      }
    )
  }

  ngOnDestroy(): void {
    if (this.stateSubscription)
      this.stateSubscription.unsubscribe();
    //window.alert('Comp DESTROY')
  }
}
