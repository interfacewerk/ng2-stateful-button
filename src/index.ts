import { NgModule } from '@angular/core';
import {
  ButtonState,
  delay,
  StatefulButtonComponent,
  SBLabelDoingComponent,
  SBLabelIdleComponent,
  SBLabelSuccessComponent
} from './stateful-button/stateful-button.directive';
import { BrowserModule } from '@angular/platform-browser';
export { ButtonState, delay };

@NgModule({
  declarations: [
    StatefulButtonComponent, SBLabelDoingComponent, SBLabelIdleComponent, SBLabelSuccessComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    StatefulButtonComponent, SBLabelDoingComponent, SBLabelIdleComponent, SBLabelSuccessComponent
  ],
  providers: []
})
export class StatefulButtonModule {
}
