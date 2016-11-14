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
<<<<<<< HEAD
import {StatefulButtonModule} from 'ng2-stateful-button'; // <-- import the module
import {MyComponent} from './my.component';

@NgModule({
    imports: [BrowserModule, StatefulButtonModule], // <-- include it in your app module
=======
import {Ng2PaginationModule} from 'ng2-pagination'; // <-- import the module
import {MyComponent} from './my.component';

@NgModule({
    imports: [BrowserModule, Ng2PaginationModule], // <-- include it in your app module
>>>>>>> 091cc568b4293533a4e7e3d33d3918372c4d25bb
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}
```

## License

MIT
