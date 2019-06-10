import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

//import { from, of } from 'rxjs';
//import { delay } from 'rxjs/internal/operators';



@Component({
  selector: 'app-linea-simulacion',
  templateUrl: './linea-simulacion.component.html',
  styleUrls: ['./linea-simulacion.component.scss']
})
export class LineaSimulacionComponent implements OnInit {
  public lineBigDashboardChartType;
  public gradientStroke;
  public chartColor;
  public canvas: any;
  public ctx;
  public gradientFill;
  public lineBigDashboardChartData: Array<any>;
  public lineBigDashboardChartOptions: any;
  public lineBigDashboardChartLabels: Array<any>;
  public lineBigDashboardChartColors: Array<any>

  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  public lineChartType;
  public lineChartData: Array<any>;
  public lineChartOptions: any;
  public lineChartLabels: Array<any>;
  public lineChartColors: Array<any>

  public lineChartWithNumbersAndGridType;
  public lineChartWithNumbersAndGridData: Array<any>;
  public lineChartWithNumbersAndGridOptions: any;
  public lineChartWithNumbersAndGridLabels: Array<any>;
  public lineChartWithNumbersAndGridColors: Array<any>

  public lineChartGradientsNumbersType;
  public lineChartGradientsNumbersData: Array<any>;
  public lineChartGradientsNumbersOptions: any;
  public lineChartGradientsNumbersLabels: Array<any>;
  public lineChartGradientsNumbersColors: Array<any>
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  constructor() { }

  ngOnInit() {
    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("bigDashboardChart");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    this.lineBigDashboardChartData = [
      {
        label: "Data",

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
      }
    ];
    this.lineBigDashboardChartColors = [
      {
        backgroundColor: this.gradientFill,
        borderColor: this.chartColor,
        pointBorderColor: this.chartColor,
        pointBackgroundColor: "#2c2c2c",
        pointHoverBackgroundColor: "#2c2c2c",
        pointHoverBorderColor: this.chartColor,
      }
    ];
    this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    this.lineBigDashboardChartOptions = {

      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      legend: {
        position: "bottom",
        fillStyle: "#FFF",
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }]
      }
    };

    this.lineBigDashboardChartType = 'line';


    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    /**lineChartExample */
    // this.canvas = document.getElementById("lineChartExample");
    // this.ctx = this.canvas.getContext("2d");

    // this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    // this.gradientStroke.addColorStop(0, '#80b6f4');
    // this.gradientStroke.addColorStop(1, this.chartColor);

    // this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    // this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    // this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    // this.lineChartData = [
    //   {
    //     label: "Active Users",
    //     pointBorderWidth: 2,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 1,
    //     pointRadius: 4,
    //     fill: true,
    //     borderWidth: 2,
    //     data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
    //   }
    // ];
    // this.lineChartColors = [
    //   {
    //     borderColor: "#f96332",
    //     pointBorderColor: "#FFF",
    //     pointBackgroundColor: "#f96332",
    //     backgroundColor: this.gradientFill
    //   }
    // ];
    // this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // this.lineChartOptions = this.gradientChartOptionsConfiguration;

    // this.lineChartType = 'line';

    /**lineChartExampleWithNumbersAndGrid*/

    this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#18ce0f');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
    //modify
    this.lineChartWithNumbersAndGridData = [
      {
        label: "Email Stats",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: []
      }
    ];
    this.lineChartWithNumbersAndGridColors = [
      {
        borderColor: "#18ce0f",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#18ce0f",
        backgroundColor: this.gradientFill
      }
    ];
    //modify
    this.lineChartWithNumbersAndGridLabels = [];
    this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    this.lineChartWithNumbersAndGridType = 'line';



    /**barChartSimpleGradientsNumbers */

    // this.canvas = document.getElementById("barChartSimpleGradientsNumbers");
    // this.ctx = this.canvas.getContext("2d");

    // this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    // this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    // this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));


    // this.lineChartGradientsNumbersData = [
    //   {
    //     label: "Active Countries",
    //     pointBorderWidth: 2,
    //     pointHoverRadius: 4,
    //     pointHoverBorderWidth: 1,
    //     pointRadius: 4,
    //     fill: true,
    //     borderWidth: 1,
    //     data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
    //   }
    // ];
    // this.lineChartGradientsNumbersColors = [
    //   {
    //     backgroundColor: this.gradientFill,
    //     borderColor: "#2CA8FF",
    //     pointBorderColor: "#FFF",
    //     pointBackgroundColor: "#2CA8FF",
    //   }
    // ];
    // this.lineChartGradientsNumbersLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // this.lineChartGradientsNumbersOptions = {
    //   maintainAspectRatio: false,
    //   legend: {
    //     display: false
    //   },
    //   tooltips: {
    //     bodySpacing: 4,
    //     mode: "nearest",
    //     intersect: 0,
    //     position: "nearest",
    //     xPadding: 10,
    //     yPadding: 10,
    //     caretPadding: 10
    //   },
    //   responsive: 1,
    //   scales: {
    //     yAxes: [{
    //       gridLines: {
    //         zeroLineColor: "transparent",
    //         drawBorder: false
    //       }
    //     }],
    //     xAxes: [{
    //       display: 0,
    //       ticks: {
    //         display: false
    //       },
    //       gridLines: {
    //         zeroLineColor: "transparent",
    //         drawTicks: false,
    //         display: false,
    //         drawBorder: false
    //       }
    //     }]
    //   },
    //   layout: {
    //     padding: {
    //       left: 0,
    //       right: 0,
    //       top: 15,
    //       bottom: 15
    //     }
    //   }
    // }

    // this.lineChartGradientsNumbersType = 'bar';
  }

  graphicPoint: GraphicPoint = {
    time: "00:00",
    value: 0
  };

  iniciarSimulacion(): void {
    let graphicPoints: GraphicPoint[] = [{ "value": 100, "time": "06:00" }, { "value": 110, "time": "06:10" }, { "value": 120, "time": "06:20" }, { "value": 140, "time": "06:30" }, { "value": 160, "time": "06:40" }, { "value": 180, "time": "06:50" }, { "value": 200, "time": "07:00" }, { "value": 120, "time": "07:10" }, { "value": 130, "time": "07:20" }, { "value": 150, "time": "07:30" }, { "value": 170, "time": "07:40" }, { "value": 180, "time": "07:50" }, { "value": 200, "time": "08:00" }, { "value": 190, "time": "09:00" }, { "value": 170, "time": "09:10" }, { "value": 150, "time": "09:20" }, { "value": 130, "time": "09:30" }, { "value": 110, "time": "09:40" }, { "value": 100, "time": "09:50" }, { "value": 100, "time": "10:00" }, { "value": 100, "time": "10:10" }, { "value": 100, "time": "10:20" }, { "value": 100, "time": "10:30" }, { "value": 100, "time": "10:40" }, { "value": 100, "time": "10:50" }, { "value": 100, "time": "11:00" }, { "value": 100, "time": "11:10" }, { "value": 100, "time": "11:20" }, { "value": 100, "time": "11:30" }, { "value": 100, "time": "11:40" }, { "value": 100, "time": "11:50" }, { "value": 200, "time": "12:00" }, { "value": 100, "time": "12:10" }, { "value": 100, "time": "12:20" }, { "value": 100, "time": "12:30" }, { "value": 100, "time": "12:40" }, { "value": 100, "time": "12:50" }, { "value": 300, "time": "13:00" }, { "value": 100, "time": "13:10" }, { "value": 100, "time": "13:20" }, { "value": 100, "time": "13:30" }, { "value": 100, "time": "13:40" }, { "value": 100, "time": "13:50" }, { "value": 200, "time": "14:00" }, { "value": 100, "time": "14:10" }, { "value": 100, "time": "14:20" }, { "value": 100, "time": "14:30" }, { "value": 100, "time": "14:40" }, { "value": 100, "time": "14:50" }, { "value": 150, "time": "15:00" }, { "value": 100, "time": "15:10" }, { "value": 100, "time": "15:20" }, { "value": 100, "time": "15:30" }, { "value": 100, "time": "15:40" }, { "value": 100, "time": "15:50" }, { "value": 100, "time": "16:00" }, { "value": 100, "time": "16:10" }, { "value": 100, "time": "16:20" }, { "value": 100, "time": "16:30" }, { "value": 100, "time": "16:40" }, { "value": 100, "time": "16:50" }, { "value": 100, "time": "17:00" }, { "value": 100, "time": "17:10" }, { "value": 100, "time": "17:20" }, { "value": 100, "time": "17:30" }, { "value": 100, "time": "17:40" }, { "value": 100, "time": "17:50" }, { "value": 150, "time": "18:00" }, { "value": 100, "time": "18:10" }, { "value": 100, "time": "18:20" }, { "value": 100, "time": "18:30" }, { "value": 100, "time": "18:40" }, { "value": 100, "time": "18:50" }, { "value": 200, "time": "19:00" }, { "value": 100, "time": "19:10" }, { "value": 100, "time": "19:20" }, { "value": 100, "time": "19:30" }, { "value": 100, "time": "19:40" }, { "value": 100, "time": "19:50" }, { "value": 300, "time": "20:00" }, { "value": 100, "time": "20:10" }, { "value": 100, "time": "20:20" }, { "value": 100, "time": "20:30" }, { "value": 100, "time": "20:40" }, { "value": 100, "time": "20:50" }, { "value": 100, "time": "21:00" }, { "value": 100, "time": "21:10" }, { "value": 100, "time": "21:20" }, { "value": 100, "time": "21:30" }, { "value": 100, "time": "21:40" }, { "value": 100, "time": "21:50" }, { "value": 150, "time": "22:00" }, { "value": 100, "time": "22:10" }, { "value": 100, "time": "22:20" }, { "value": 100, "time": "22:30" }, { "value": 100, "time": "22:40" }, { "value": 100, "time": "22:50" }, { "value": 90, "time": "23:00" }];
    from(graphicPoints).pipe(
      concatMap(item => of(item).pipe(delay(1000)))
    ).subscribe(
      graphicPointItem => {
        this.lineChartWithNumbersAndGridData[0].data.push(graphicPointItem.value);
        this.lineChartWithNumbersAndGridLabels.push(graphicPointItem.time);
        this.graphicPoint.time = graphicPointItem.time;
        this.graphicPoint.value = graphicPointItem.value;
        this.mostrarGrafico();
      },
      error => { },
      () => {
        this.lineChartWithNumbersAndGridData[0].data = [];
        this.lineChartWithNumbersAndGridLabels = [];
      }
    );

  }


  mostrarGrafico(): void {
    this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#18ce0f');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));


    //this.lineChartWithNumbersAndGridData[0].data = [100, 110, 120, 140, 160];

    this.lineChartWithNumbersAndGridColors = [
      {
        borderColor: "#18ce0f",
        pointBorderColor: "#FFF",
        pointBackgroundColor: "#18ce0f",
        backgroundColor: this.gradientFill
      }
    ];
    //this.lineChartWithNumbersAndGridLabels = ["06:00", "06:10", "06:20", "06:30", "06:40"];
    this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

    this.lineChartWithNumbersAndGridType = 'line';
  }
}

export interface GraphicPoint {
  value: number,
  time: String
}