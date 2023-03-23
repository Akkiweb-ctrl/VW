import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Admincomponent } from "./admin.component";
import { AuthComponent } from "./auth.component";

let routing=RouterModule.forChild([
    {path: "auth",component:AuthComponent},
    {path: "main",component:Admincomponent},
    {path: "**", redirectTo:"auth"}
])

@NgModule({
    imports:[CommonModule, FormsModule,routing],
    exports:[],
    declarations:[AuthComponent,Admincomponent],
    providers:[]
})
export class AdminModule{}