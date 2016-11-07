/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IData } from './IData';
import { UnitTestCardComponent } from './unit-test-card.component';
import { PieChartComponent } from '.././pie-chart/pie-chart.component';

describe('Component: UnitTestCard', () => {
  let comp: UnitTestCardComponent;
  let fixture: ComponentFixture<UnitTestCardComponent>;
  let de: DebugElement;
  let card: HTMLElement;

  let mockData: IData = {
    state: 'accepted',
    noOfTestsPassed: 142,
    noOfTestsFailed: 10,
    testsPassed: 73,
    codeCovered: 76
  };

  let mockChartData = [{
    label: 'No of tests passed',
    value: mockData.noOfTestsPassed
  }, {
    label: 'No of tests failed',
    value: mockData.noOfTestsFailed
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartComponent, UnitTestCardComponent]
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestCardComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;

    comp.data = mockData;
    comp.chartData = mockChartData;

    fixture.detectChanges();
    card = fixture.debugElement.query(By.css('div.card')).nativeElement;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should have correct percentage of tests passed', () => {
    let percentage = card.querySelector('.graph-percent').textContent;
    expect(percentage).toEqual(mockData.testsPassed + '%test Passed');
  });

  it('should have correct percentage of code coverage', () => {
    let percentage = card.querySelector('.progress-bar').textContent;
    expect(percentage.trim()).toEqual(mockData.codeCovered + '% code covered');
  });

  it('should have proper color for the card based on the state', () => {
    expect(card.classList.contains('card-green')).toBeTruthy();
  });

  it('should have a pie chart component', () => {
    expect(de.query(By.directive(PieChartComponent))).toBeTruthy();
    expect(card.querySelector('svg')).toBeTruthy();
  });

  it('should have a progress bar with proper value for the code coverage', () => {
    let el: HTMLDivElement = <HTMLDivElement>card.querySelector('.progress-bar');
    let percentage = el.style.width;
    expect(percentage).toEqual(mockData.codeCovered + '%');
  });

});
