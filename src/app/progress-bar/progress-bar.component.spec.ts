/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { IData } from './IData';
import { IOptions } from './IOptions';

describe('Component: ProgressBar', () => {
  let comp:    ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let data: IData = {progress: 80, state: 'running'};
  let options: IOptions = {
    width: 500,
    height: 20,
    margin: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
  };
  let div;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarComponent]
    })
    .compileComponents(); // compiles template and css
   }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
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

  it('should have proper width and height', () => {
    let svg = div.nativeElement.querySelector('svg');
    expect(svg.clientWidth).toEqual(options.width + options.margin.left + options.margin.right );
    expect(svg.clientHeight).toEqual(options.height + options.margin.top + options.margin.bottom );
  });

  it('should show proper progress', () => {
    let rect = div.nativeElement.querySelector('rect.progressWidth').getBoundingClientRect();
    // Wait for the animation to finish
    setTimeout(() => {
      expect(rect.width).toEqual(options.width * (data.progress / 100));
    }, 2000);
  });

  it('should show proper color for the progress', () => {
    let rect = div.nativeElement.querySelector('rect.progressWidth');
    expect(rect.getAttribute('fill')).toEqual(comp.stateColors[data.state]);
  });

});
