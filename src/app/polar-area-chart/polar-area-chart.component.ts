import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.css']
})
export class PolarAreaChartComponent
              implements OnInit {
  ngOnInit(): void {
    const data = {
      labels: [
        'Angular',
        'NetCore',
        'C#',
        'VB.Net',
        'JavaScript',
        'TypeScript',
        'WebServices (Restful)',
        'WebServices (SOAP)',
        'CSS',
        'Bootstrap',
        'HTML',
        'MVC',
        'Razor',
        'Git',
        'XML',
        'SQL Server',
        'MySQL',
        'PHP',
        'NodeJs',
        'WordPress',
        'JSON'
      ],
      datasets: [{
        label: 'Knowledge percentage',
        data: [85, 70 ,90, 100, 75, 85, 85, 95, 95, 85, 85, 90, 85, 85, 95, 95, 95, 90, 75, 75, 95],
        backgroundColor: [
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2),
          this.getRandomColor(0.2)
        ]
      }]
    };

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'polarArea',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Polar Area Chart'
          }
        }
      },
    });
  }

  //Esta parte es para generar un color random
  private usedColors: Set<string> = new Set();

  getRandomColor(opacity: number): string {
    const possibleChars = '0123456789ABCDEF';
    let color = '#';
    
    while (true) {
      color = '#';
      for (let i = 0; i < 6; i++) {
        color += possibleChars[Math.floor(Math.random() * 16)];
      }

      if (!this.usedColors.has(color)) {
        this.usedColors.add(color);
        return this.addOpacityToColor(color, opacity); // Aplica la opacidad y retorna el color
      }
    }
  }

  private addOpacityToColor(hexColor: string, opacity: number): string {
    const hexWithoutHash = hexColor.substring(1);
    const r = parseInt(hexWithoutHash.substring(0, 2), 16);
    const g = parseInt(hexWithoutHash.substring(2, 4), 16);
    const b = parseInt(hexWithoutHash.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
  }
  //--------------------------------------------
}