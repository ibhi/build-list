import { Component, OnInit, OnChanges, SimpleChange, AfterViewInit , Input, ElementRef, ViewChild } from '@angular/core';
import { IData } from './IData';
import { IOptions } from './IOptions';
import * as D3 from 'd3';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data: IData;
  @Input() options: IOptions;
  @ViewChild('container') element: ElementRef;
  private progressData: Array<{ x: number, y: number, value: number }>;
  private xScale: any;
  private host;
  private svg: any;
  private htmlElement: HTMLElement;

  stateColors = {
    running: '#5e9cd3',
    rejected: '#be0712',
    completed: '#548039',
    accepted: '#548039'
  };

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (!this.data || !this.options || !this.host) { return; }
    this.progressData = this.prepareData(this.data);
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
    this.host        = D3.select(this.htmlElement);
    this.progressData = this.prepareData(this.data);
    this.setup();
    this.render();
  }

  private prepareData(data) {
    return [{
      x: 0,
      y: 0,
      value: this.data.progress
    }];
  }

  setup() {
    let margin = {
      left: 30,
      right: 30,
      bottom: 30,
      top: 30
    };

    this.options.margin = Object.assign({}, margin, this.options.margin);

    this.xScale = D3.scaleLinear().range([0, this.options.width]).domain([0, 100]);
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('width', this.options.width + this.options.margin.left + this.options.margin.right)
      .attr('height', this.options.height + this.options.margin.top + this.options.margin.bottom)
      .append('g')
        .attr('transform', 'translate(' + this.options.margin.left + ',' + this.options.margin.top + ')');

    this.svg.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('height', this.options.height + 'px')
      .attr('fill', '#d8d8d8')
      .attr('width', this.xScale(100) + 'px');
  }

  render() {
    // enter phase
    this.svg.selectAll('rect.progress')
      .data(this.progressData)
      .enter()
      .append('rect')
        .attr('class', 'progress')
        .attr('x', (d) => this.xScale(d.x))
        .attr('y', (d) => d.y)
        .attr('height', this.options.height + 'px')
        .attr('fill', this.stateColors[this.data.state])
        .attr('width', 0)
        .transition()
        .duration(1000)
        .ease(D3.easeLinear)
        .attr('width', (d) => this.xScale(d.value) + 'px');
    // update phase
    this.svg.selectAll('rect.progress')
      .attr('width', function() {
        console.log(D3.select(this));
        return D3.select(this).attr('width');
      })
      .transition()
      .duration(1000)
      .ease(D3.easeLinear)
      .attr('width', (d) => this.xScale(d.value) + 'px');
  }
}
