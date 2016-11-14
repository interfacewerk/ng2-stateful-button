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

## Example

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

## License

MIT
