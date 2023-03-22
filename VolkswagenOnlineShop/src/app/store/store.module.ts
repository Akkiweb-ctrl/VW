import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { CartSummaryComponent } from "./cartSummary.component";
import { StoreComponent } from "./store.component";

@NgModule({
    imports:[ModelModule, BrowserModule],  //module dependency
    declarations:[StoreComponent, CartSummaryComponent],    //@component, @pipe, @directive
    exports:[StoreComponent],                          //@component, @pipe, @directive but used by other module
    providers:[]            //@injectable
})
export class StoreModule{}