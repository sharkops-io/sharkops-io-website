import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ExternalLinkComponent } from './external-link.component';

@NgModule({
  declarations: [
    ExternalLinkComponent
  ],
  exports: [
    ExternalLinkComponent,
    ClarityModule
  ],
  imports: [
    ClarityModule
  ]
})
export class SharkOpsCommonModule {}
