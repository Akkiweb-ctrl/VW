import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class Order {
  constructor(public cart: Cart) {}
  public id?: number;
  public name?: string;
  public city?: string;
  public address?: string;
  public state?: string;
  public zip?: string;
  public country?: string;
  public shipped?: boolean = false;

  clear(){
      this.cart.clear();
      this.id=undefined;
      this.name=this.city=this.address=this.state=undefined;
      this.zip=this.country=undefined;
      this.shipped=false;
  }
}
