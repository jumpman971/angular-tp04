import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Observable, from, fromEvent, interval, Subscription } from 'rxjs';
import { first, last, filter, mapTo, scan, auditTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit, AfterViewInit {

  public title: string = 'La Programmation RXJS'
  public tempsSecondes: number;
  public flag: boolean;
  public subscriptionCount: Subscription;
  @ViewChild('formations2') elUl!: ElementRef<HTMLElement>;
  //@ViewChildren('jaime') elJaime!: QueryList<ElementRef<HTMLElement>>;
  //@ViewChildren('jaimePas') elJaimePas!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('jaime') elJaime!: ElementRef<HTMLElement>;
  @ViewChild('jaimePas') elJaimePas!: ElementRef<HTMLElement>;
  @ViewChild('nbJaime') elNbJaime!: ElementRef<HTMLElement>;
  @ViewChild('nbJaimePas') elNbJaimePas!: ElementRef<HTMLElement>;
  //Strict mode NG11 ===> typer ElementRef
  // ! == obligatoire
  // ? == optionnel

  constructor() { 
    this.tempsSecondes = 0;
    this.subscriptionCount = new Subscription()
    this.flag = true;
  }

  ngOnInit(): void {
    console.log('Init');
    console.log('Elt :', this.elJaime);
    
    const elJaime = <HTMLElement> document.querySelector('#jaime');
    const sourceJaime = fromEvent(elJaime, 'click');
    
    sourceJaime.pipe(
      mapTo(1),
      scan((total, valeur) => {
        return total + valeur
      })
    ).subscribe(nbJaime => {
      this.elNbJaime.nativeElement.innerHTML = nbJaime + " J'aime(s)"
      this.elNbJaime.nativeElement.setAttribute('disabled', 'false')
    });
  }

  public ngAfterViewInit(): void {
    console.log('After View Init');
    console.log('Elt :', this.elJaime);

    fromEvent(this.elJaimePas.nativeElement, 'click').pipe(
      mapTo(1),
      scan((total, valeur) => {
        return total + valeur
      })
    ).subscribe(nbJaimePas => {
      this.elNbJaimePas.nativeElement.innerHTML = nbJaimePas + " J'aime(s)"
      this.elNbJaimePas.nativeElement.setAttribute('disabled', 'false')
    });
  }

  public createObservable1(): void {
    const elUl: HTMLElement = <HTMLElement> document.querySelector("ul#formations")
    elUl.innerHTML = '';

    const formationsArray: string[] = ['NG11', 'REACT16', 'Vue']
    console.table(formationsArray)

    //creation d'un observable à partir de FROM
    /*const formations$: Observable<string> = from(formationsArray);
    
    formations$.subscribe(
      (formation) => {
        console.log(formation);
        
      }
    )*/
    from(formationsArray).pipe(
      /*first(
        (formation) => {return formation=='ES'}
      )*/
      last()
    ).subscribe(
      (formation) => {
        console.log(formation);
        const li: HTMLElement = document.createElement('li')
        li.innerHTML = formation
        elUl.appendChild(li);
      }
    )
  }

  public createObservable2(): void {
    //const elUl: HTMLElement = <HTMLElement> document.querySelector("ul#formations")
    //elUl.innerHTML = '';
    if (!this.elUl)
      return;
    
    this.elUl.nativeElement.innerHTML = '';

    //un tableau à 2 entrées
    const formationsArray: any[] = [
      { cours: 'NG11', duree: 4 }, 
      { cours: 'REACT16', duree: 3 }, 
      { cours: 'VUE', duree: 2 }, 
      { cours: 'ECMA SCRIPT', duree: 2 }, 
      { cours: 'TYPESCRIPT', duree: 2 }, 
    ]
    console.table(formationsArray)

    //TP: n'afficher que les formations dont la durée est 2 jours
    from(formationsArray).pipe(
      /*first(
        (formation) => {return formation=='ES'}
      )*/
      filter(
        formation => {return formation.duree === 2}
      )
    ).subscribe(
      (formation) => {
        console.log(formation);
        const li: HTMLElement = document.createElement('li')
        li.innerHTML = 'Cours: '+formation.cours + ', duree: ' + formation.duree
        this.elUl.nativeElement.appendChild(li);
      }
    )
  }

  public toggleStartStop(): void {
    if (this.flag) {
      const compteur$: Observable<number> = interval(250).pipe(
        take(20) //nombre de répétition
      )
  
      this.subscriptionCount = compteur$.subscribe(
        (valeurInterval: number) => {
          this.tempsSecondes = valeurInterval;
        }
      )
      this.flag = false;
    } else {
      if (this.subscriptionCount) this.subscriptionCount.unsubscribe();
      this.flag = true;
    }
  }
}
