import { Component, OnInit } from '@angular/core';
import { Chart, registerables,ChartOptions } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css'],
})
export class MychartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createPieChart();
    this.createLineChart();
    this.createPolarAreaChart();
    this.createRadarChart();
    this.createDoughnutChart();
    this.createHorizontalBarChart();
  }

  private createPieChart() {
    const pieChartCanvas = document.getElementById(
      'pieChart'
    ) as HTMLCanvasElement;
    new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
        labels: ['Sales', 'Expenses', 'Profit'],
        
        datasets: [
          {
            data: [3000, 1500, 1500],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            
          },
        ],
      },
      options: {
        
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }, // Start the x-axis at zero
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }, // Start the y-axis at zero
          },
        },
        maintainAspectRatio: false, // Allow chart to resize based on canvas dimensions
      },
    });
  }

  private createLineChart() {
    const lineChartCanvas = document.getElementById(
      'lineChart'
    ) as HTMLCanvasElement;
    new Chart(lineChartCanvas, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [2000, 2500, 2200, 2800, 3000, 3200],
            borderColor: '#36A2EB',
            fill: false,
          },
          {
            label: 'Expenses',
            data: [800, 1000, 900, 1100, 1200, 950],
            borderColor: '#FF6384',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            },
            // Start the x-axis at zero
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }, // Start the y-axis at zero
          },
        },
        maintainAspectRatio: false, // Allow chart to resize based on canvas dimensions
      },
    });
  }

  private createPolarAreaChart() {
    const polarAreaChartCanvas = document.getElementById(
      'polarAreaChart'
    ) as HTMLCanvasElement;
    new Chart(polarAreaChartCanvas, {
      type: 'polarArea',
      data: {
        labels: ['Appetizers', 'Main Courses', 'Desserts', 'Drinks'],
        datasets: [
          {
            data: [25, 45, 15, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }, // Start the x-axis at zero
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white'
              ,
            }, // Start the y-axis at zero
          },
        },
        maintainAspectRatio: false, // Allow chart to resize based on canvas dimensions
      },
    });
  }

  private createRadarChart() {
    const radarChartCanvas = document.getElementById(
      'radarChart'
    ) as HTMLCanvasElement;
    new Chart(radarChartCanvas, {
      type: 'radar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Sales',
            data: [1800, 2100, 2000, 2200, 2400],
            borderColor: '#36A2EB',
            fill: true,
          },
          {
            label: 'Expenses',
            data: [600, 750, 700, 800, 850],
            borderColor: '#FF6384',
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }, // Start the x-axis at zero
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white',
            }, // Start the y-axis at zero
          },
        },
        maintainAspectRatio: false, // Allow chart to resize based on canvas dimensions
      },
    });
  }
  private createDoughnutChart() {
    const doughnutChartCanvas = document.getElementById(
      'doughnutChart'
    ) as HTMLCanvasElement;
    new Chart(doughnutChartCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Sales', 'Expenses', 'Profit'],
        datasets: [
          {
            data: [3000, 1500, 1500],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      } as ChartOptions, // Make sure to cast the options as ChartOptions
    });
  }
  createHorizontalBarChart() {
    const feedbackChartCanvas = document.getElementById(
      'feedbackChart'
    ) as HTMLCanvasElement;

    // Sample data for customer ratings and feedback
    const data = {
      labels: ['Biryani', 'Haleem', 'Karahi', 'Fast Food', 'BBQ'],
      datasets: [
        {
          label: 'Customer Ratings',
          data: [4, 3, 5, 2, 4], // Replace with your actual ratings
          backgroundColor: '#36A2EB', // Adjust the color as needed
        },
      ],
    };

    new Chart(feedbackChartCanvas, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,

            max: 5,
            ticks: {
              color: 'white',
            }, // Adjust the maximum rating value
          },
          y: {
            ticks: {
              color: 'white',
            }, // You can customize the y-axis options here if needed
          },
        },
        plugins: {
          legend: {
            display: false, // You can display the legend if needed
          },
        },
      } as ChartOptions,
    });
  }
}
