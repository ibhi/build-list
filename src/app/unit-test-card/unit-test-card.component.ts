import { Component, OnInit, Input } from '@angular/core';
import { IData } from './IData';
import { IData as IChartData }   from '.././pie-chart/IData';
import { IOptions as IChartOptions } from '.././pie-chart/IOptions';

@Component({
  selector: 'app-unit-test-card',
  templateUrl: './unit-test-card.component.html',
  styleUrls: ['./unit-test-card.component.scss']
})
export class UnitTestCardComponent implements OnInit {
  private _data: IData;
  chartData: Array<IChartData> = [];
  @Input()
  set data(data: IData) {
    this._data = data;
    this.chartData.push({
      label: 'No of tests passed',
      value: data.noOfTestsPassed
    });
    this.chartData.push({
      label: 'No of tests failed',
      value: data.noOfTestsFailed
    });
  }
  get data(): IData {
    return this._data;
  }

  /* tslint:disable:no-unused-variable */
  private chartOptions: IChartOptions = {
    width: 125,
    height: 125,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    }
  };
  /* tslint:enable:no-unused-variable */
  constructor() { }

  ngOnInit() {
  }

}
