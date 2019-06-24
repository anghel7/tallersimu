import { Component, OnInit, Input } from '@angular/core';
import { GraphicPoint } from '../../shared/models/graphic-point';
import { from, of } from 'rxjs';
import { delay, concatMap, timeout } from 'rxjs/operators';
import { DataLinea } from '../../shared/models/data-linea';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-linea-simulacion-item',
  templateUrl: './linea-simulacion-item.component.html',
  styleUrls: ['./linea-simulacion-item.component.scss']
})
export class LineaSimulacionItemComponent implements OnInit {
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

  @Input()
  public initialpoint: GraphicPoint;
  @Input()
  public datatime: string;

  public disableSimulacionBtn: boolean = false;

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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    let response: DataLinea[] = this.dataService.getAllI();
    this.loadDataToGraphic(
      this.getInitialData(response),
      this.getHeaders()
    );

  }

  public getHeaders(): any[] {
    let response: DataLinea[] = this.dataService.getAllI();
    let array: any[] = response.map((e) => {
      return e[this.datatime].map((t) => t.time);
    });
    if (array.length > 0) {
      return array[0];
    }
    return [];
  }

  public getInitialData(response: DataLinea[]): any[] {
    return response.map((e) => {
      return {
        color: e.color,
        data: []
      }
    });
  }

  public getDatas(response: DataLinea[]): any[] {
    let res = response.map(
      (element) => {
        return {
          color: element.color,
          data: element[this.datatime].map(e => e.value)
        };
      }
    );
    return res;
  }


  loadDataToGraphic(datas: any[], labels: any[]): void {
    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("bigDashboardChart");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
    /** */
    this.lineBigDashboardChartData = [];
    this.lineBigDashboardChartColors = [];
    datas.forEach(element => {
      this.lineBigDashboardChartData.push(
        {
          label: "Pasajeros",
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          borderWidth: 2,
          data: element.data
        }
      );
      this.lineBigDashboardChartColors.push(
        {
          backgroundColor: this.gradientFill,
          borderColor: element.color,
          pointBorderColor: element.color,
          pointBackgroundColor: element.color,
          pointHoverBackgroundColor: "#FFFFFF",
          pointHoverBorderColor: element.color,
        }
      );
    });
    /** */
    this.lineBigDashboardChartLabels = labels;
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
  }

  private intervalId: any = 0;
  private counter: number = 0;
  private isMapped: boolean = false;
  private globalData: any[] = [];

  getGlobalData(): any[] {
    if (this.isMapped) {
      return this.globalData;
    } else {
      let response: DataLinea[] = this.dataService.getAllI();
      let data: any[] = response.map((element) => {
        return {
          color: element.color,
          data: element[this.datatime].map((e) => e.value)
        }
      });
      data = data.map((element) => {
        return {
          color: element.color,
          data: element.data.map((e) => {
            let randomNumber: number = Math.random() * (1.15 - 0.85) + 0.85;
            return Math.floor(e * randomNumber);
          })

        }
      });
      this.isMapped = true;
      this.globalData = data;
      return data;
    }
  }

  playSimulation(): void {
    this.disableSimulacionBtn = true;
    let data: any[] = this.getGlobalData();
    let headers: any[] = this.getHeaders();
    this.intervalId = setInterval(() => {
      if (this.counter < headers.length) {
        let dataToSend: any[] = data.map((element) => {
          return {
            color: element.color,
            data: element.data.slice(0, this.counter + 1)
          };
        });
        this.loadDataToGraphic(dataToSend, headers);
        this.counter++;
      } else {
        clearInterval(this.intervalId);
        this.counter = 0;
        this.disableSimulacionBtn = false;
        this.isMapped = false;
      }

    }, 1000);

  }

  stopSimulation(): void {
    clearInterval(this.intervalId);
    this.disableSimulacionBtn = false;
  }

  offSimulation(): void {
    clearInterval(this.intervalId);
    this.counter = 0;
    this.disableSimulacionBtn = false;
    this.isMapped = false;
    this.ngOnInit();
  }

}
