import { Component, OnInit, OnChanges, AfterViewInit,  Input, ElementRef, ViewChild, SimpleChange } from '@angular/core';
import { IData } from './IData';
import { IOptions } from './IOptions';
import * as D3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: Array<IData>;
  @Input() options: IOptions;
  @ViewChild('container') element: ElementRef;
  private htmlElement: HTMLElement;
  private host;
  private svg;
  private arc;
  private chartWidth: number;
  private chartHeight: number;
  private chartColors;
  constructor() { }

  ngOnInit() {
    if (this.data.length <= 2) {
      this.chartColors = (i) => {
        let colors = ['#eb7d3b', '#72ac4d'];
        return colors[i];
      };
    } else {
      this.chartColors = D3.scaleOrdinal(D3.schemeCategory10);
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (!this.data || !this.options || !this.host) { return; }

    if (changes['data']) {
      this.render();
    }

    if (changes['data'] && changes['options']) {
      this.setup();
      this.render();
    }
  }

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement;
    this.host = D3.select(this.htmlElement);
    this.setup();
    this.render();
  }

  setup() {
    let margin = {
      left: 20,
      right: 20,
      bottom: 20,
      top: 20
    };

    this.options.margin = Object.assign({}, margin, this.options.margin);

    this.chartWidth = this.options.width - this.options.margin.left - this.options.margin.right;
    this.chartHeight = this.options.height - this.options.margin.top - this.options.margin.bottom;

    this.arc = D3.arc()
      .outerRadius(this.chartHeight / 2)
      .innerRadius(0)
      .padAngle(0.01);

    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.options.width)
      .attr('height', this.options.height)
      .append('g')
        .attr('transform', 'translate(' + this.options.margin.left + ',' + this.options.margin.top + ')');
  }

  render() {
    let arcs = D3.pie()
      .sort(null)
      .value(d => d.value)(this.data);

    let pieG = this.svg.selectAll('g')
            .data([this.data])
            .enter()
            .append('g')
              .attr('transform', 'translate(' + [this.chartWidth / 2, this.chartHeight / 2] + ')');

    let block = pieG.selectAll('.arc')
      .data(arcs)
      .enter()
      .append('g')
        .classed('arc', true);

    block.append('path')
      .attr('d', this.arc)
      .attr('id', (d, i) => 'arc-' + i)
      .attr('stroke', 'gray')
      .attr('fill', (d, i) => this.chartColors(i));

    block.append('text')
      .attr('class', 'pie-label')
      .attr('x', 200)
      .attr('dy', 20)
      .append('textPath')
        .attr('xlink:href', (d, i) => '#arc-' + i)
        .text((d) => d.data.value );

  }

}
