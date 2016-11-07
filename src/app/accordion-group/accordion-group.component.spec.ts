/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AccordionGroupComponent } from './accordion-group.component';
import { AccordionComponent } from '.././accordion/accordion.component'
describe('Component: AccordionGroup', () => {
  let comp: AccordionGroupComponent;
  let fixture: ComponentFixture<AccordionGroupComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionGroupComponent],
      providers: [AccordionComponent]
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionGroupComponent);
    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
