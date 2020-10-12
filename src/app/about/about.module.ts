import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { SharkOpsCommonModule } from '../common/common.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharkOpsCommonModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AboutModule {}
