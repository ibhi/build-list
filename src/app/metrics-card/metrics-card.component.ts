import { Component, OnInit, Input } from '@angular/core';
import { IData } from './IData';
@Component({
  selector: 'app-metrics-card',
  templateUrl: './metrics-card.component.html',
  styleUrls: ['./metrics-card.component.scss']
})
export class MetricsCardComponent implements OnInit {
  @Input() data: IData;
  /* tslint:disable:no-unused-variable */
  private testGoal: number = 75;
  private maintainabilityGoal = 50;
  /* tslint:enable:no-unused-variable */
  constructor() { }

  ngOnInit() {
  }

}
