import { Component, OnInit } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { ChartDataService } from './core/chart-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  chartData: Observable<any>;

  constructor(private mdIconRegistry: MdIconRegistry,
    private chartDataService: ChartDataService) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit() {
    this.chartData = this.chartDataService.getSingle();
  }
}
