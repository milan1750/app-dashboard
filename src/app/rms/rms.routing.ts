import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
// import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
// import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RmsComponent } from './rms.component';
import { ReceiptComponent } from './receipt/receipt.component';

const routes: Routes = [
    { path: 'rms', component: RmsComponent  ,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'receipt', component: ReceiptComponent},

        ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class RmsRoutingModule { }
