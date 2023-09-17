import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables,ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,

  ApexDataLabels,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexStroke,
  ApexLegend
} from "ng-apexcharts";

export type ChartOpt = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  dataLabels : ApexDataLabels
  legend : ApexLegend;

  
  
};
export type ChartPie = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type ChartArea = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;

  
};
Chart.register(...registerables);
Chart.register(ChartDataLabels);


@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css'],
})
export class MychartComponent implements OnInit {
  @ViewChild("chart") chart: any;
  public chartOpt: ChartOpt;
 
  public ChartArea: ChartArea;
  public ChartPie: ChartPie;

  constructor() {
    this.ChartPie = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 680,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: "top"
            }
          ,
            
          }
        }
      ]
    };
    this.chartOpt = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "My First Angular Chart",
        style:{
          color: 'white'
        }
        
      
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        
      },
      
    

      dataLabels: {
        enabled: true,
        style: {
          colors: ['white']
        }
      },
      legend: {
       
        position: 'top'
      },
     
    };
    this.ChartArea = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        
          
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ],
        
        
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        
          
        },
        
       
      },
      legend: {
        show: true,
        position: 'top'
        
      },
    };
  }
  

  ngOnInit(): void {
    this.createPieChart();
    this.createLineChart();
    this.createPolarAreaChart();
    this.createRadarChart();
    this.createDoughnutChart();
    this.createHorizontalBarChart();

    
  }
  
  public generateData(baseval : any, count : any, yrange : any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

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
            data: [3000, 1500, 1500, 1200,500],
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
            formatter: function (value : any , context : any) {
              const dataPoints = context.chart.data.datasets[0].data;
              function totalSum(total : any, datapoint : any) { 
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
    const lineChartCanvas = document.getElementById('lineChart') as HTMLCanvasElement;
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
           labels :{
            color: 'white', // Set the color of
           
           
           }
          },
          datalabels: {
            color : 'white'
          }
        },
        
      },
      plugins: [ChartDataLabels],
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
       
        maintainAspectRatio: false, 
        plugins: {
          legend: {
            labels: {
              color: 'white', // Set the color of


            }
          },
          datalabels: {
            color: 'white'
          }
        }// Allow chart to resize based on canvas dimensions
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
        labels:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        
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
        
     
        maintainAspectRatio: false,
         // Allow chart to resize based on canvas dimensions
        plugins: {
          
          
          legend: {
            display: true,
            labels:{
              color : 'white',
            } // You can display the legend if needed
          },


          tooltip: {
            enabled: true
          },
          datalabels: {
            color: 'white'
          }

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
            labels :{
              color : 'white',
            }
          },
          datalabels: {
            color: 'white'
          }
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
              color : 'white',
            } // You can display the legend if needed
          },
        
            tooltip: {
              enabled: true
            },
          datalabels: {
            color: 'white'
          }
      
        },
      } as ChartOptions,
    });
  }
}

// import { Component, ViewChild } from "@angular/core";

// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexTitleSubtitle
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
// };

// @Component({
//   selector: "app-root",
//   templateUrl: "./mychart.component.html",
//   styleUrls: ["./mychart.component.css"]
// })
// export class MychartComponent {
//   @ViewChild("chart") chart: any;
//   public chartOptions: any;

//   constructor() {
//     this.chartOptions = {
//       series: [
//         {
//           name: "My-series",
//           data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//         }
//       ],
//       chart: {
//         height: 350,
//         type: "bar"
//       },
//       title: {
//         text: "My First Angular Chart"
//       },
//       xaxis: {
//         categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
//       }
//     };
//   }
// }
