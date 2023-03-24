import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Admincomponent } from "./admin.component";
import { AuthComponent } from "./auth.component";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { MaterialFeatures } from "./material.module";

let routing=RouterModule.forChild([
    {path: "auth",component:AuthComponent},
    {path: "main",component:Admincomponent,children:[
        {path:"products/:mode/:id",component:ProductEditorComponent},
        {path:"products/:mode", component:ProductEditorComponent},
        {path:"products",component:ProductTableComponent},
        {path:"**", redirectTo:"products"}
    ]},
    {path: "**", redirectTo:"auth"}
])

@NgModule({
    imports:[CommonModule,MaterialFeatures, FormsModule,routing,MaterialFeatures],
    exports:[],
    declarations:[AuthComponent,Admincomponent,ProductTableComponent,ProductEditorComponent],
    providers:[]
})
export class AdminModule{}