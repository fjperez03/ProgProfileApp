import { Component } from '@angular/core';
import { IChart } from './chat';

@Component({
  selector: 'app-css-chart',
  templateUrl: './css-chart.component.html',
  styleUrls: ['../../assets/css/css-chart.css']
})
export class CssChartComponent {
  public charts: IChart[] = [{
    "chartTitle": "English",
    "color": "red",
    "percent": 50
  },
  {
    "chartTitle": "Spanish",
    "color": "red",
    "percent": 100
  }
];
  
}
