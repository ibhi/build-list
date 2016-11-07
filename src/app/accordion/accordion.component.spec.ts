/* tslint:disable:no-unused-variable */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';
import { AccordionGroupComponent } from '.././accordion-group/accordion-group.component';

const html = `
  <app-accordion [closeOthers]="oneAtATime">

    <app-accordion-group [isOpen]="panels[0].isOpen">
      Content of panel 1
    </app-accordion-group>

    <app-accordion-group [isOpen]="panels[1].isOpen">
      Content of panel 2
    </app-accordion-group>

    <app-accordion-group [isOpen]="panels[2].isOpen">
      <div app-accordion-heading>
        Heading 3
      </div> 
      Content of panel 3
    </app-accordion-group>

  </app-accordion>
`;

function getPanels(element: HTMLElement): Element[] {
  return Array.from(element.querySelectorAll('.acc-cont'));
}

function expectOpenPanels(nativeEl: HTMLElement, openPanelsDef: boolean[]): void {
  const panels = getPanels(nativeEl);
  expect(panels.length).toBe(openPanelsDef.length);
  for (let i = 0; i < panels.length; i++) {
    if (openPanelsDef[i]) {
      expect(panels[i].classList).not.toContain('collapse');
    } else {
      expect(panels[i].classList).toContain('collapse');
    }
  }
}

function hasTitle(element: HTMLElement, str: string): boolean {
  return element.textContent === str;
}

describe('Component: Accordion', () => {
  let fixture: ComponentFixture<TestAccordionComponent>;
  let context: any;
  let element: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent, AccordionGroupComponent, TestAccordionComponent ]
    });
    TestBed.overrideComponent(TestAccordionComponent, {set: {template: html}});
    fixture = TestBed.createComponent(TestAccordionComponent);
    context = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should have no open panels', () => {
    expectOpenPanels(element, [false, false, false]);
  });

  it('should have open panel based on binding', () => {
    context.panels[0].isOpen = true;
    fixture.detectChanges();
    expectOpenPanels(element, [true, false, false]);
  });

  it('should toggle panels independently', () => {
    context.oneAtATime = false;

    context.panels[1].isOpen = true;
    fixture.detectChanges();
    expectOpenPanels(element, [false, true, false]);

    context.panels[0].isOpen = true;
    fixture.detectChanges();
    expectOpenPanels(element, [true, true, false]);

    context.panels[1].isOpen = false;
    fixture.detectChanges();
    expectOpenPanels(element, [true, false, false]);

    context.panels[2].isOpen = true;
    fixture.detectChanges();
    expectOpenPanels(element, [true, false, true]);

    context.panels[0].isOpen = false;
    fixture.detectChanges();
    expectOpenPanels(element, [false, false, true]);

    context.panels[2].isOpen = false;
    fixture.detectChanges();
    expectOpenPanels(element, [false, false, false]);
  });

  it('should only open one at a time', () => {
    const headingLinks = element.querySelectorAll('.acc-list');

    headingLinks[0].click();
    fixture.detectChanges();
    expectOpenPanels(element, [true, false, false]);

    headingLinks[2].click();
    fixture.detectChanges();
    expectOpenPanels(element, [false, false, true]);

    headingLinks[2].click();
    fixture.detectChanges();
    expectOpenPanels(element, [false, false, false]);
  });

  it('should have only one open panel even if binding says otherwise', () => {
    context.panels[0].isOpen = true;
    context.panels[1].isOpen = true;
    // which of panels should be opened there? the first or the last one? (now - last)
    fixture.detectChanges();
    expectOpenPanels(element, [false, true, false]);
  });

});

@Component({
  selector: 'app-accordion-test',
  template: ''
})

class TestAccordionComponent {
  public oneAtATime: boolean = true;
  public panels: Array<any> = [
    { isOpen: false },
    { isOpen: false },
    { isOpen: false }
  ];
}
