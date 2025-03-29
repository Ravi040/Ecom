import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { RouterOutlet } from '@angular/router';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="order-summary">
      <h2 class="Order-summary-title">Order Summary</h2>
      <div class="order-total">
        <span>Total:</span>
        <span>{{'$'+ total()}}</span>
        
      </div>
      <app-primary-button label="Proceed to Check Out"/>
    </div>
   
  `,
  styles: `
  .order-summary {
  width: 100%;
  max-width: 1200px;
  border: 1px solid #e0e0e0;
  margin-left:20px;
  margin-bottom:40px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  font-family: Arial, sans-serif;
}

.order-summary-title {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.order-total {
  font-size: 24px;
  font-weight: bold;
  color: #000;
  display: flex;
  // justify-content: space-between;  
  padding-top: 12px;
  border-top: 2px solid #f0f0f0;
}


  `
})

export class OrderSummaryComponent {
  CartService=inject(CartService)
  total=computed(()=>{
    let total=0
    for(const item of this.CartService.cart()){
      total+=item.price;

    }
    return total
  }

  )

  }

  


