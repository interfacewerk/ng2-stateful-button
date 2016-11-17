import { NgModule } from '@angular/core';
import {
  ButtonState,
  delay,
  StatefulButtonComponent,
  SBLabelDoingComponent,
  SBLabelIdleComponent,
  SBLabelSuccessComponent,
  SBLabelFailureComponent
} from '../stateful-button/stateful-button.component';
import { BrowserModule } from '@angular/platform-browser';
export { ButtonState, delay };

@NgModule({
  declarations: [
    StatefulButtonComponent, SBLabelDoingComponent, SBLabelIdleComponent, SBLabelSuccessComponent, SBLabelFailureComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    StatefulButtonComponent, SBLabelDoingComponent, SBLabelIdleComponent, SBLabelSuccessComponent, SBLabelFailureComponent
  ],
  providers: []
})
export class StatefulButtonLibrary {
}
