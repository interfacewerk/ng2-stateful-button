import {
  Component,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'sb-label-idle',
  template: `<ng-content></ng-content>`
})
export class SBLabelIdleComponent {}

@Component({
  selector: 'sb-label-success',
  template: `<ng-content></ng-content>`
})
export class SBLabelSuccessComponent {}

@Component({
  selector: 'sb-label-doing',
  template: `<ng-content></ng-content>`
})
export class SBLabelDoingComponent {}

@Component({
  selector: 'stateful-button',
  template: `<ng-content></ng-content>`,
  styles: [
    `
    :host {
      display: inline-block;
    }

    :host:not(.stateful-button--idle) >>> sb-label-idle {
      opacity: 0;
    }

    :host:not(.stateful-button--doing) >>> sb-label-doing {
      opacity: 0;
    }

    :host:not(.stateful-button--success) >>> sb-label-success {
      opacity: 0;
    }

    :host >>> sb-label-idle, :host >>> sb-label-doing, :host >>> sb-label-success {
      height: 30px;
      line-height: 30px;
      margin-top: -30px;
      text-align: center;
      display: block;
    }

    :host >>> sb-label-idle {
      margin-top: 0;
    }

    :host.stateful-button--doing >>> button {
      background-color: grey;
      color: white;
      cursor: wait;
    }

    :host.stateful-button--success >>> button {
      background-color: #2ECC40;
      color: white;
    }

    :host >>> sb-label-doing::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: 0px 5px -3px 0px;
      border-radius: 10px;
      box-shadow: 0 1px 0 0 white;
      -ms-animation: ring 1s linear infinite;
      -moz-animation: ring 1s linear infinite;
      -webkit-animation: ring 1s linear infinite;
      -o-animation: ring 1s linear infinite;
      animation: ring 1s linear infinite;
      z-index: 1;
    }
    `
  ]
})
export class StatefulButtonComponent {
  @HostBinding('attr.class') get elementClass(): string {
    let always = 'stateful-button ';
    switch (this.buttonState) {
      case ButtonState.DOING:
        return always + 'stateful-button--doing';
      case ButtonState.SUCCESS:
        return always + 'stateful-button--success';
      default:
        return always + 'stateful-button--idle';
    }
  }

  @Input() buttonState: ButtonState = ButtonState.IDLE;

  showLoading: boolean;
  showSuccess: boolean;

  constructor() {}

}

export enum ButtonState {
  IDLE,
  DOING,
  SUCCESS
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}
