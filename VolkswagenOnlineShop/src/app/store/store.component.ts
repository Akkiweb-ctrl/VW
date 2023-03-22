import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
    selector: 'vw-store',
    templateUrl: './store.component.html',
})
export class StoreComponent {
    selectedCategory: string | undefined;
    productsPerPage = 3;
    selectedPage = 1;

    constructor(private repository: ProductRepository, private cart:Cart) { }

    public get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository
            .getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    public get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string): void {
        this.selectedCategory = newCategory;
        this.changePage(1);
    }

    //Event Handler  for pagination button click
    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    //number array to create page buttons
    get pageNumbers(): number[] {
        //it's a property
        return Array(
            Math.ceil(
                this.repository.getProducts(this.selectedCategory).length /
                this.productsPerPage
            )
        )
            .fill(0)
            .map((x, i) => i + 1);
    }

    //event Handler for page size change

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    //event handler for add product to cart

    addProductToCart(product:Product){
        this.cart.addLine(product);
    }
}
