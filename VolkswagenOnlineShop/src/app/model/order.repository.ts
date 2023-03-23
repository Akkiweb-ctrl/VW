import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.dataSource";

@Injectable()
export class OrderRepository{

    private orders:Order[]=[];
    constructor(private dataSource:StaticDataSource){ }

    saveOrder(order:Order):Observable<Order>{
       return this.dataSource.saveOrder(order);
    }
}