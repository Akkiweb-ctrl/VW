import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.dataSource";
import { StaticDataSource } from "./static.dataSource";


@NgModule({
    imports:[HttpClientModule],
    declarations:[],
    exports:[],
    providers:[
        ProductRepository,
        Cart,
        Order,
        OrderRepository,
        {provide:StaticDataSource, useClass:RestDataSource},
        RestDataSource, AuthService
    ]

})
export class ModelModule{

}