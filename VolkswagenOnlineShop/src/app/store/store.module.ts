import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { CartDetailComponent } from "./cartDetail.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CheckoutComponent } from "./checkout.component";
import { StoreComponent } from "./store.component";

@NgModule({
    imports:[ModelModule, BrowserModule, RouterModule],  //module dependency
    declarations:[StoreComponent, CartSummaryComponent,CartDetailComponent,CheckoutComponent],    //@component, @pipe, @directive
    exports:[StoreComponent, CartDetailComponent,CheckoutComponent],                          //@component, @pipe, @directive but used by other module
    providers:[]            //@injectable
})
export class StoreModule{}