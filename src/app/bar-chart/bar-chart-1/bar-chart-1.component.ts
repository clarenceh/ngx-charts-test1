import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart-1',
  templateUrl: './bar-chart-1.component.html',
  styleUrls: ['./bar-chart-1.component.scss']
})
export class BarChart1Component implements OnInit {

  @Input() data;

  view: any[] = [600, 400];
  // view: any[] = undefined;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
    console.log(`Data: ${JSON.stringify(this.data)}`);
  }

  onSelect(event) {
    console.log(event);
  }

}
