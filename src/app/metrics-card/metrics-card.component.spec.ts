/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IData } from './IData';
import { MetricsCardComponent } from './metrics-card.component';

describe('Component: MetricsCard', () => {
  let comp: MetricsCardComponent;
  let fixture: ComponentFixture<MetricsCardComponent>;
  let de: DebugElement;
  let card: HTMLElement;

  let data: IData = {
    test: 80,
    maintainability: 49,
    security: 64,
    workmanship: 72
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MetricsCardComponent]
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsCardComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;

    comp.data = data;

    fixture.detectChanges();
    card = fixture.debugElement.query(By.css('div.card')).nativeElement;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should have correct test score', () => {
    let testScore = +card.querySelector('#test').textContent;
    expect(testScore).toEqual(data.test);
  });

  it('should have correct maintainability score', () => {
    let maintainabilityScore = +card.querySelector('#maintainability').textContent;
    expect(maintainabilityScore).toEqual(data.maintainability);
  });

  it('should have correct security score', () => {
    let securityScore = card.querySelector('#security').textContent;
    expect(securityScore).toEqual('Security: ' + data.security);
  });

  it('should have correct workmanship score', () => {
    let workmanshipScore = card.querySelector('#workmanship').textContent;
    expect(workmanshipScore).toEqual('Workmanship: ' + data.workmanship);
  });

  it('test arrow: should have correct color based on goal', () => {
    let container = card.querySelector('.arrow-container-left');
    let arrow = container.querySelector('[ng-reflect-ng-class]');
    expect(arrow.classList.contains('up-arrow-green')).toBeTruthy();
  });

  it('maintainability arrow: should have correct color based on goal', () => {
    let container = card.querySelector('.arrow-container-right');
    let arrow = container.querySelector('[ng-reflect-ng-class]');
    expect(arrow.classList.contains('up-arrow-red')).toBeTruthy();
  });

});
