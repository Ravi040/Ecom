import { Component, inject, input } from '@angular/core';
import { product } from '../../../models/products.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
  <div class="cards">
  <!-- Left Side: Product Image -->
  <img [src]="item().image" alt="Product Image" class="card-imgs">

  <!-- Right Side: Product Details -->
  <div class="card-contents">
    <span class="card-titles">{{ item().title }}</span>
    <span class="card-prices">{{ '$' + item().price }}</span>
  </div>
  <div><app-button label="remove" (btnClicked)="CartService.removefromcart(item().id)"/></div>
</div>


    
  `,
  styles: `
 /* Card Container */
.cards {
  display: flex;
  align-items: center;
  width: calc(100% - 40px); /* 100% width minus 20px margin on both sides */
  max-width: 1200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  background-color: #fff;
  box-sizing: border-box;
  margin: 15px 20px; /* 20px margin on left & right, 10px space between cards */
}

/* Left Side: Image */
.card-imgs {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

/* Right Side: Content */
.card-contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

/* Title */
.card-titles {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

/* Price */
.card-prices {
  font-size: 16px;
  color: #555;
}

/* Make sure it's responsive */
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: start;
    text-align: left;
    width: calc(100% - 40px);
  }

  .card-imgs {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
}



  
  `
})
export class CartItemComponent {
  item=input.required<product>()
  CartService=inject(CartService)

}
