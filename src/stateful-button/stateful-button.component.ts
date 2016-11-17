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
  selector: 'sb-label-failure',
  template: `<ng-content></ng-content>`
})
export class SBLabelFailureComponent {}

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

    :host:not(.stateful-button--failure) >>> sb-label-failure {
      opacity: 0;
    }

    :host:not(.stateful-button--doing) >>> sb-label-doing {
      opacity: 0;
    }

    :host:not(.stateful-button--success) >>> sb-label-success {
      opacity: 0;
    }

    :host >>> sb-label-idle, :host >>> sb-label-doing, :host >>> sb-label-success, :host >>> sb-label-failure {
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

    :host.stateful-button--failure >>> button {
      background-color: red;
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
      -ms-animation: stateful-button--animation 1s linear infinite;
      -moz-animation: stateful-button--animation 1s linear infinite;
      -webkit-animation: stateful-button--animation 1s linear infinite;
      -o-animation: stateful-button--animation 1s linear infinite;
      animation: stateful-button--animation 1s linear infinite;
      z-index: 1;
    }

    @-moz-keyframes stateful-button--animation {
      0% {
        -moz-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -moz-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-ms-keyframes stateful-button--animation {
      0% {
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes stateful-button--animation {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @-o-keyframes stateful-button--animation {
      0% {
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes stateful-button--animation {
      0% {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
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
      case ButtonState.FAILURE:
        return always + 'stateful-button--failure';
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
  SUCCESS,
  FAILURE
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}
