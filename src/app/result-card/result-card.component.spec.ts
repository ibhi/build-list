/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IData } from './IData';
import { ResultCardComponent } from './result-card.component';

describe('Component: ResultCard', () => {
  let comp: ResultCardComponent;
  let fixture: ComponentFixture<ResultCardComponent>;
  let de: DebugElement;
  let card: HTMLElement;

  let mockData: IData = {
    title: 'Change Accepted',
    state: 'accepted',
    status: 'Auto-Merged',
    btnText: 'Merge Build'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultCardComponent]
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCardComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;

    comp.data = mockData;

    fixture.detectChanges();
    card = fixture.debugElement.query(By.css('div.card')).nativeElement;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });

  it('should have proper color for the text based on the state', () => {
    let text = card.querySelector('div.mar20');
    expect(text.classList.contains('orange-text')).toBeTruthy();
  });

  it('should have proper title', () => {
    let title = card.querySelector('div.mar20>span').textContent;
    expect(title).toBe(mockData.title);
  });

  it('should have proper status', () => {
    let status = card.querySelector('div.mar20>h2').textContent;
    expect(status).toBe(mockData.status);
  });

  it('should have proper button text', () => {
    let text = card.querySelector('.btn.btn-primary').textContent;
    expect(text.trim()).toBe(mockData.btnText);
  });

});
