import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeDesFilmsComponent } from './liste-des-films/liste-des-films.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListeDesFilmsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ListeDesFilmsComponent]
})
export class FilmsModule { }
