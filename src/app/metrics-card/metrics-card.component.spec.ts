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
    state: 'running',
    progress: 75,
    testScore: 80,
    maintainabilityScore: 49,
    securityScore: 64,
    workmanshipScore: 72
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
    expect(testScore).toEqual(data.testScore);
  });

  it('should have correct maintainability score', () => {
    let maintainabilityScore = +card.querySelector('#maintainability').textContent;
    expect(maintainabilityScore).toEqual(data.maintainabilityScore);
  });

  it('should have correct security score', () => {
    let securityScore = +card.querySelector('#security').textContent;
    expect(securityScore).toEqual(data.securityScore);
  });

  it('should have correct workmanship score', () => {
    let workmanshipScore = +card.querySelector('#workmanship').textContent;
    expect(workmanshipScore).toEqual(data.workmanshipScore);
  });

  it('test arrow: should have correct color and arrow direction based on goal', () => {
    let arrow = card.querySelector('#test');
    expect(arrow.classList.contains('up-arrow')).toBeTruthy();
    expect(arrow.classList.contains('arrow-green')).toBeTruthy();
  });

  it('maintainability arrow: should have correct color and arrow direction based on goal', () => {
    let arrow = card.querySelector('#maintainability');
    expect(arrow.classList.contains('down-arrow')).toBeTruthy();
    expect(arrow.classList.contains('arrow-red')).toBeTruthy();
  });

});
