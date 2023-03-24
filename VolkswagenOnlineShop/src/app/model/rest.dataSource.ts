import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
import { Product } from "./product.model";
import { map, Observable } from "rxjs";
import { Order } from "./order.model";

const PROTOCOL="http";
const PORT = 4300;
@Injectable()
export class RestDataSource{

    baseUrl:string;
    auth_token?:string;
    constructor(private http:HttpClient){
        this.baseUrl=`${PROTOCOL}://${location.hostname}:${PORT}/`
    }

    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl+"products");
    }

    saveOrder(order:Order):Observable<Order>
    {
        return this.http.post<Order>(this.baseUrl+'orders',order);

    }

    authenticate(user:string, pass:string):Observable<boolean>{
        return this.http.post<any>(this.baseUrl+"login",
                    {name:user,password:pass}).pipe(map(response=>{
                        this.auth_token=response.success?response.token:null;
                        sessionStorage["vwToken"]=this.auth_token;
                        return response.success;
                    }));
    }

    saveProduct(product:Product):Observable<Product>{
        return this.http.post<Product>(this.baseUrl+"products",product,this.getHeadersOption());
    }

    updateProduct(product : Product):Observable<Product>{
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,product,this.getHeadersOption());
    }

    private getHeadersOption()
    {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${sessionStorage["vwToken"]}`
            })
        }
    }
}