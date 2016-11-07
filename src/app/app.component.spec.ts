/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MetricsCardComponent } from './metrics-card/metrics-card.component';
import { BuildCardComponent } from './build-card/build-card.component';
import { UnitTestCardComponent } from './unit-test-card/unit-test-card.component';
import { EpochDatePipe } from './epoch-date//epoch-date.pipe';
import { ResultCardComponent } from './result-card/result-card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './data.service';
import { mockData } from './mock-data-test';

describe('Component: AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let element: HTMLElement;

  let mockJobs = mockData();

  beforeEach(async(() => {

    let mockHttp = {
      get:  null
    } as Http;
  
    spyOn(mockHttp, 'get').and.returnValue(Observable.of({
      json: () => mockJobs
    }));

    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent,
        ProgressBarComponent,
        PieChartComponent,
        MetricsCardComponent,
        BuildCardComponent,
        UnitTestCardComponent,
        EpochDatePipe,
        ResultCardComponent,
        AccordionComponent,
        AccordionGroupComponent,
        NavbarComponent
      ],
      providers: [
        { provide: Http, useValue: mockHttp },
        DataService
      ]
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should have proper number of accordion group', () => {
    expect(element.querySelectorAll('app-accordion-group').length).toEqual(mockJobs.length);
  });

});
