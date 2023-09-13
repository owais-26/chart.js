import { Component, OnInit } from '@angular/core';
import { Chart, registerables, ChartOptions } from 'chart.js';
// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexTitleSubtitle,
//   ApexDataLabels,
//   ApexFill,
//   ApexMarkers,
//   ApexYAxis,
//   ApexXAxis,
//   ApexTooltip,
// } from 'ng-apexcharts';
// import { dataSeries } from './data-series';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css'],
})
export class MychartComponent implements OnInit {
  // public series: ApexAxisChartSeries[] = []; // Initialize as an empty array
  // public chart: ApexChart = {
  //   type: 'line', // Add the 'type' property here
  // };
  // public dataLabels: ApexDataLabels = {}; // Initialize as an empty object
  // public markers: ApexMarkers = {}; // Initialize as an empty object
  // public title: ApexTitleSubtitle = {}; // Initialize as an empty object
  // public fill: ApexFill = {}; // Initialize as an empty object
  // public yaxis: ApexYAxis[] = []; // Initialize as an empty array
  // public xaxis: ApexXAxis = {}; // Initialize as an empty object
  // public tooltip: ApexTooltip = {}; // Initialize as an empty object
  constructor() {}

  ngOnInit(): void {
    this.createPieChart();
    this.createLineChart();
    this.createPolarAreaChart();
    this.createRadarChart();
    this.createDoughnutChart();
    this.createHorizontalBarChart();
    // this.initChartData();
  }
  // public initChartData(): void {
  //   let ts2 = 1484418600000;
  //   let dates = [];
  //   for (let i = 0; i < 120; i++) {
  //     ts2 = ts2 + 86400000;
  //     dates.push([ts2, dataSeries[1][i].value]);
  //   }

  //   this.series = [
  //     {
  //       name: 'XYZ MOTORS',
  //       data: dates,
  //     },
  //   ];
  //   this.chart = {
  //     type: 'area',
  //     stacked: false,
  //     height: 350,
  //     zoom: {
  //       type: 'x',
  //       enabled: true,
  //       autoScaleYaxis: true,
  //     },
  //     toolbar: {
  //       autoSelected: 'zoom',
  //     },
  //   };
  //   this.dataLabels = {
  //     enabled: false,
  //   };
  //   this.markers = {
  //     size: 0,
  //   };
  //   this.title = {
  //     text: 'Stock Price Movement',
  //     align: 'left',
  //   };
  //   this.fill = {
  //     type: 'gradient',
  //     gradient: {
  //       shadeIntensity: 1,
  //       inverseColors: false,
  //       opacityFrom: 0.5,
  //       opacityTo: 0,
  //       stops: [0, 90, 100],
  //     },
  //   };
  //   this.yaxis = {
  //     labels: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0);
  //       },
  //     },
  //     title: {
  //       text: 'Price',
  //     },
  //   };
  //   this.xaxis = {
  //     type: 'datetime',
  //   };
  //   this.tooltip = {
  //     shared: false,
  //     y: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0);
  //       },
  //     },
  //   };
  // }
  private createPieChart() {
    const pieChartCanvas = document.getElementById(
      'pieChart'
    ) as HTMLCanvasElement;

    new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
        labels: ['Sales', 'Expenses', 'Profit', 'Loss', 'Discount'],
        datasets: [
          {
            data: [3000, 1500, 1500, 1200, 500],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#34322', 'red'],
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
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white',
            },
          },
          datalabels: {
            formatter: function (value: any, context: any) {
              const dataPoints = context.chart.data.datasets[0].data;
              function totalSum(total: any, datapoint: any) {
                return total + datapoint;
              }

              const totalValue = dataPoints.reduce(totalSum, 0);
              const percent = ((value / totalValue) * 100).toFixed(1);
              return percent + '%';
            },
            color: 'white',
          },
        }, // Allow chart to resize based on canvas dimensions
      },
      plugins: [ChartDataLabels],
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
              color: 'white', // Set the color of x-axis labels here
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white', // Set the color of y-axis labels here
            },
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white', // Set the color of
            },
          },
        },
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
              color: 'white',
            }, // Start the y-axis at zero
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white', // Set the color of
            },
          },
        }, // Allow chart to resize based on canvas dimensions
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
        maintainAspectRatio: false,
        // Allow chart to resize based on canvas dimensions
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'white',
            }, // You can display the legend if needed
          },

          tooltip: {
            enabled: true,
          },
        },
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
            labels: {
              color: 'white',
            },
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
            display: true,
            labels: {
              color: 'white',
            }, // You can display the legend if needed
          },

          tooltip: {
            enabled: true,
          },
        },
      } as ChartOptions,
    });
  }
}
