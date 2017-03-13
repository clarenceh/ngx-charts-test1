import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule
  ],
  exports: [
    MaterialModule,
    NgxChartsModule
  ],
  declarations: []
})
export class SharedModule { }
