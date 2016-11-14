import { NgModule } from '@angular/core';
import { ButtonState, delay, StatefulButtonDirective } from './stateful-button/stateful-button.directive';
export { ButtonState, delay };

@NgModule({
  declarations: [
    StatefulButtonDirective
  ],
  imports: [
  ],
  exports: [
    StatefulButtonDirective
  ],
  providers: []
})
export class StatefulButtonModule {
}
