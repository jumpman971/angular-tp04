import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OperatorsComponent } from './operators/operators.component';



@NgModule({
  declarations: [OperatorsComponent],
  imports: [
    CommonModule,
    UpperCasePipe,
  ],
  exports: [OperatorsComponent]
})
export class RxjsModule { }
