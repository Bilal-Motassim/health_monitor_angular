import { Chart, registerables, } from 'chart.js';
import { Component, OnInit } from '@angular/core';

Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createCalorieChart();
  }

  createCalorieChart(): void {
    new Chart('calorieChart', {
      type: 'doughnut',
      data: {
        labels: ['Fats', 'Protein', 'Carbs', 'Fibres'],
        datasets: [
          {
            data: [30, 109, 150, 70],
            backgroundColor: ['#f1c40f', '#e74c3c', '#f39c12', '#27ae60'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
          },
        },
      },
    });
  }
}
