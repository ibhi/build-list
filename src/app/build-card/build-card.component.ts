import { Component, OnInit, Input } from '@angular/core';
import { IData } from './IData';

@Component({
  selector: 'app-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.scss']
})
export class BuildCardComponent implements OnInit {
  @Input() data: IData;
  constructor() { }

  ngOnInit() {
  }

}
