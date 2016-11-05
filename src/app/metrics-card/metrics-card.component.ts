import { Component, OnInit, Input } from '@angular/core';
import { IData } from './IData';
@Component({
  selector: 'app-metrics-card',
  templateUrl: './metrics-card.component.html',
  styleUrls: ['./metrics-card.component.scss']
})
export class MetricsCardComponent implements OnInit {
  @Input() data: IData;
  constructor() { }

  ngOnInit() {
  }

}
