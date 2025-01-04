import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-repport',
  templateUrl: './repport.component.html',
  styleUrl: './repport.component.css'
})
export class RepportComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createLineChart();
    this.createBarChart();
    this.createPieChart();
  }

  createLineChart() {
    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Weight Progress',
            data: [65, 64, 63, 62, 61, 60, 59],
            borderColor: '#4CAF50',
            tension: 0.4,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }

  createBarChart() {
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Bodybuilding', 'Football', 'Running'],
        datasets: [
          {
            label: 'Calories Burned',
            data: [300, 600, 700],
            backgroundColor: ['#FF5733', '#33CFFF', '#33FF57']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }

  createPieChart() {
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Carbs', 'Proteins', 'Fats', 'Fibers'],
        datasets: [
          {
            data: [44.8, 33.3, 16.2, 5.7],
            backgroundColor: ['#FFC300', '#FF5733', '#C70039', '#900C3F']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      }
    });
  }
  printReport() {
    window.print();
  }

}
