import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RmsRoutingModule} from './rms.routing';
import {RmsComponent} from './rms.component';
import { RouterModule} from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import {ComponentsModule} from '../components/components.module';
// import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
@NgModule({
  declarations: [DashboardComponent, RmsComponent],
  imports: [
    CommonModule,
    RmsRoutingModule,
    RouterModule,
    ComponentsModule,
  ],
  exports: [
    DashboardComponent,
  ],
  bootstrap: [RmsComponent]

})
export class RmsModule { }
