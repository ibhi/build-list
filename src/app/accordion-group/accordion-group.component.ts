import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { AccordionComponent } from '.././accordion/accordion.component';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.scss']
})
export class AccordionGroupComponent implements OnInit, OnDestroy {
  @Input() accClass: string;
  @Input()
  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOtherPanels(this);
    }
  }

  private _isOpen: boolean;
  private accordion: AccordionComponent;

  public constructor(@Inject(AccordionComponent) accordion: AccordionComponent) {
    this.accordion = accordion;
  }

  public ngOnInit(): any {
    this.accordion.addGroup(this);
  }

  public ngOnDestroy(): any {
    this.accordion.removeGroup(this);
  }

  public toggleOpen(event: MouseEvent): any {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

}
