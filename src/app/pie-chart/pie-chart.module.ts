import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { PieChart1Component } from './pie-chart-1/pie-chart-1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PieChart1Component],
  exports: [
    PieChart1Component
  ]
})
export class PieChartModule { }
