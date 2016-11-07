/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IData } from './IData';
import { BuildCardComponent } from './build-card.component';
import { EpochDatePipe } from '.././epoch-date/epoch-date.pipe';

describe('Component: BuildCard', () => {
  let comp: BuildCardComponent;
  let fixture: ComponentFixture<BuildCardComponent>;
  let de: DebugElement;
  let card: HTMLElement;

  let mockData: IData = {
    state: 'rejected',
    timestamp: 1460889960
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EpochDatePipe, BuildCardComponent]
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCardComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;

    comp.data = mockData;

    fixture.detectChanges();
    card = de.query(By.css('div.card')).nativeElement;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should have correct timestamp', () => {
    let timestamp = card.querySelector('.lap-time').textContent;
    let expectedDate = 'Apr 17, 2016, 4:16:00 PM';
    expect(timestamp).toBe(expectedDate);
  });

  it('should have proper color based on state', () => {
    expect(card.classList.contains('card-red')).toBeTruthy();
  });
});
