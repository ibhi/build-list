import { Component, OnInit, Input } from '@angular/core';
import { IData } from './IData';
@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() data: IData;
  constructor() { }

  ngOnInit() {
  }

}
