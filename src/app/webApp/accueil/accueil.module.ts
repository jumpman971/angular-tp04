import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LandingPageComponent, HeaderComponent, HomeComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LandingPageComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ]
})
export class AccueilModule { }
