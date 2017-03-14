import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CoreModule } from './core/core.module';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';

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
    CoreModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    NgxChartsModule,
    BarChartModule,
    PieChartModule
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
