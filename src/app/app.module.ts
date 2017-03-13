import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BarChartModule } from './bar-chart/bar-chart.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    NgxChartsModule,
    BarChartModule
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
