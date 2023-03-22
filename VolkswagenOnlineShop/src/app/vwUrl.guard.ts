import {  Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class VwUrlGuard{
    private firstNavigation=true;

    constructor(private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean{
        if(this.firstNavigation==true){
            this.firstNavigation=false;
            if(route.component!= StoreComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;

    }
}