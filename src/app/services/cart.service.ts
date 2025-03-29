import { Injectable, signal } from '@angular/core';
import { product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=signal<product[]>([
    
  ])

  addtocart(product:product){
    this.cart.set([...this.cart(),product])
  }

  removefromcart(id:number){
    this.cart.set(this.cart().filter((p)=>p.id!==id))

  }

  constructor() { }
}
