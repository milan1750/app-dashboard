import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RmsRoutingModule} from './rms.routing';
import {RmsComponent} from './rms.component';
import { RouterModule} from '@angular/router';
import {ComponentsModule} from './components/components.module';
import { ReceiptComponent } from './receipt/receipt.component';
// import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
@NgModule({
  declarations: [DashboardComponent, RmsComponent, ReceiptComponent],
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
