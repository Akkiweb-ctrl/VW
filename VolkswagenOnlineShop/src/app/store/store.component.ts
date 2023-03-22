import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector:"vw-store",
    templateUrl: "./store.component.html",
})
export class StoreComponent{

    selectedCategory:string|undefined;

    constructor(private repository:ProductRepository){

    }

    
    public get products() : Product[] {
        return this.repository.getProducts(this.selectedCategory);
    }

    
    public get categories() : string[] {
        return this.repository.getCategories();
    }
    
    changeCategory(newCategory?:string):void{
        this.selectedCategory=newCategory;
    }
}