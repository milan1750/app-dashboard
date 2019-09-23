import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RmsRoutingModule} from './rms.routing';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RmsRoutingModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class RmsModule { }
