import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.dataSource";

@NgModule({
    imports:[],
    declarations:[],
    exports:[],
    providers:[
        ProductRepository,
        StaticDataSource,
        Cart
    ]

})
export class ModelModule{

}