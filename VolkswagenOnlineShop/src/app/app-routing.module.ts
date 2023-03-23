import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreComponent } from './store/store.component';
import { VwUrlGuard } from './vwUrl.guard';

const routes: Routes = [
  { path: "store", component:StoreComponent, canActivate:[VwUrlGuard] },
  { path: "cart", component:CartDetailComponent,canActivate:[VwUrlGuard]},
  { path: "checkout", component:CheckoutComponent,canActivate:[VwUrlGuard]},
  { path: "admin", loadChildren:() => import("./admin/admin.module")
                    .then(m => m.AdminModule), canActivate:[VwUrlGuard]},

  { path: "**",redirectTo:"/store" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[VwUrlGuard]
})
export class AppRoutingModule { }
