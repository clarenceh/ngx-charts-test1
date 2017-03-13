import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ChartDataService } from './chart-data.service';
import { BarChart1Component } from './bar-chart-1/bar-chart-1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BarChart1Component
  ],
  providers: [
    ChartDataService
  ],
  exports: [
    BarChart1Component
  ]
})
export class BarChartModule { }
