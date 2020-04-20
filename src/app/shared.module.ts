import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { EchartsComponent } from './global-components/echarts/echarts.component';



@NgModule({
  declarations: [
    EchartsComponent
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    ClarityModule,
    EchartsComponent
  ]
})
export class SharedModule { }
