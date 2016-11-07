import { Component, Input, HostBinding } from '@angular/core';
import { AccordionGroupComponent } from '.././accordion-group/accordion-group.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public closeOthers: boolean;

  /* tslint:disable:no-unused-variable */
  @HostBinding('class.panel-group')
  public addClass: boolean = true;
  /* tslint:enable:no-unused-variable */

  private groups: Array<AccordionGroupComponent> = [];

  public closeOtherPanels(openGroup: AccordionGroupComponent): void {
    if (!this.closeOthers) {
      return;
    }

    this.groups.forEach((group: AccordionGroupComponent) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  public addGroup(group: AccordionGroupComponent): void {
    this.groups.push(group);
  }

  public removeGroup(group: AccordionGroupComponent): void {
    let index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}
