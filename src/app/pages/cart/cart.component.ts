import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  template: `
    <div>
      <h2 class="headstyle">Shopping Cart</h2>
      @for (item of CartService.cart(); track item.id) {
        <app-cart-item [item]="item"/>
      }
      <app-order-summary/>
    </div>
    
  `,
  styles: `
  h2{
    padding :20px
    
  }
  
  `
})
export class CartComponent {
  CartService = inject(CartService)

}
