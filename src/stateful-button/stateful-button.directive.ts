import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[statefulButton]'
})
export class StatefulButtonDirective {

  @Input() set statefulButton(state: ButtonState) {
    this.state = state;
    this.updateFromState();
  }

  constructor(private elementRef: ElementRef) {
    this.state = ButtonState.NEUTRAL;
    this.element = this.elementRef.nativeElement;
    this.element.classList.add('stateful-button');
  }

  private state: ButtonState; 
  private element: HTMLElement;

  private updateFromState() {
    switch(this.state) {
      case ButtonState.DOING: {
        this.element.classList.add('stateful-button--doing');
        this.element.classList.remove('stateful-button--success');
        this.element.classList.remove('stateful-button--neutral');
        break; 
      }
      case ButtonState.SUCCESS: {
        this.element.classList.remove('stateful-button--doing');
        this.element.classList.add('stateful-button--success');
        this.element.classList.remove('stateful-button--neutral');
        break;
      }
      default: {
        this.element.classList.remove('stateful-button--doing');
        this.element.classList.remove('stateful-button--success');
        this.element.classList.add('stateful-button--neutral');
        break;
      }
    }    
  }
}

export enum ButtonState {
  NEUTRAL,
  DOING,
  SUCCESS
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}