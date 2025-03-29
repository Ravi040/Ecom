import { Component,inject,input } from '@angular/core';
import { product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
   <div class="card">
   <div class="stock-badge">
    @if (product().stock) {
      {{ product().stock }} left
    }
    @else {
      <span style="color: red">Out of Stock</span>
    }
  </div>
      <img [src]="product().image" alt="Product Image">
      <div class="card-body">
        <h5 class="card-title">{{ product().title }}</h5>
        <p class="card-text"><b>Price</b>: {{ '$' + product().price }}</p>
        <!-- <p class="card-text"><b>Stock</b>: {{ product().stock }}</p> -->
        <app-primary-button label="Add to Cart" (btnClicked)="cartService.addtocart(product())"/>
      </div>
    </div>

   
  `,
  styles: ` `
})
export class ProductCardComponent {
  cartService=inject(CartService)


  product = input.required<product>()

}
