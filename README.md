# Angular2 Stateful Button

## Demo

An implementation of stateful buttons for angular2+ including loading, progress,success and failure state.

## Installation

```
yarn add ng2-stateful-button 
```

or

```
npm install ng2-stateful-button --save
```


## Setup

```TypeScript
// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StatefulButtonModule} from 'ng2-stateful-button'; // <-- import the module
import {MyComponent} from './my.component';

@NgModule({
    imports: [BrowserModule, StatefulButtonModule], // <-- include it in your app module
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}
```

## Usage

### Behaviour

ng2-stateful-button provides one component `stateful-button` that you can use to wrap a button:

```
<stateful-button [buttonState]="myButtonState">
  <button (click)="do()">
    <sb-label-idle>Save</sb-label-idle>
    <sb-label-doing>Saving</sb-label-doing>
    <sb-label-success>Saved</sb-label-success>
    <sb-label-failure>Save failed!</sb-label-failure>
  </button>
</stateful-button>
```

The `stateful-button` component takes one input `buttonState`, which is the state of your button.

There are four states which are defined in an `enum ButtonState`. Your component controls the state of the button.

```
import { ButtonState } from 'ng2-stateful-button';

@Component(…)
export class MyComponent {
  …
  myButtonState: ButtonState = ButtonState.IDLE;
  …

  do() {
    this.myButtonState = ButtonState.DOING;
    // http requests, timeout, etc.
    this.myButtonState = ButtonState.SUCCESS;
  }
}
```

Use the `sb-label-idle/doing/failure/success` components to define what will be shown for each state of the button. That's it!

** IMPORTANT **: put the `sb-label-XY` into the `<button>`.

### Style

ng2-stateful-button comes with inline component styles. They are completely customizable. Each state (IDLE, DOING, SUCCESS, FAILURE) is represented
as a CSS class on the `stateful-button` element. No magic here. You can customize the `sb-label-XY` as well. For your information, the generated HTML looks like:

```
<stateful-button class="stateful-button stateful-button--doing">
  <button>
    <sb-label-idle>Save</sb-label-idle>
    <sb-label-doing>Saving</sb-label-doing>
    <sb-label-success>Saved</sb-label-success>
    <sb-label-failure>Save failed!</sb-label-failure>
  </button>
</stateful-button>
```

## Develop

Link your development folder of ng2-stateful-button:

```
yarn link
```

and then go to a project you want to use the stateful buttons in and do

```
yarn link "ng2-stateful-button"
```

to use it there.


## License

MIT
