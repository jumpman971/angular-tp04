import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './webApp/accueil/home/home.component';
import { ListeDesFilmsComponent } from './webApp/films/liste-des-films/liste-des-films.component';
import { OperatorsComponent } from './webApp/rxjs/operators/operators.component';

const routes: Routes = [
  { path:'accueil', component: HomeComponent },
  { path:'', component: HomeComponent },
  { path:'les-films', component: ListeDesFilmsComponent },
  { path:'programmation-rxjs', component: OperatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
