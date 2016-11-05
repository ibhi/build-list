/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IData } from './IData';
import { IOptions } from './IOptions';
import { PieChartComponent } from './pie-chart.component';

describe('Component: PieChart', () => {
  let comp: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let div: DebugElement;

  let data: Array<IData> = [{
    label: 'Failed No. of unit tests',
    value: 400
  }, {
    label: 'Passed No. of unit tets',
    value: 600
  }];

  let options: IOptions = {
    width: 500,
    height: 500,
    margin: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartComponent]
    })
    .compileComponents(); // compiles template and css
   }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;

    comp.data = data;
    comp.options = options;

    fixture.detectChanges();
    div = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should have same number of blocks as of data', () => {
    let svg = div.nativeElement.querySelector('svg');
    let blocks = svg.querySelectorAll('.arc');
    expect(blocks.length).toEqual(data.length);
  });

  it('should have the same number in the label as of data', () => {
    let svg = div.nativeElement.querySelector('svg');
    let labels = svg.querySelectorAll('.pie-label');

    labels.forEach((label, i) => {
      let text = label.querySelector('textPath');
      expect(+text.textContent).toEqual(data[i].value);
    });

  });
});
