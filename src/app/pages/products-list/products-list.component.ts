import { Component, signal } from '@angular/core';
import { product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="products-container">
      @for (product of products(); track product.id) {
        <app-product-card [product]="product"/>
      }
    </div>
    
  `,
  styles: ``
})
export class ProductsListComponent {

  async ngOnInit(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data=await res.json();
    this.products.set(data)

  }
  products = signal<product[]>([

    // {
    //   id: 1,
    //   title: "Men's Casual Cotton Shirt - Navy Blue",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRxQVvDKUwSu50D-ABu9cpe3PgOD03BTAgA&s",
    //   price: 39.99,
    //   stock: 50,
      
    // },
    // {
    //   id: 2,
    //   title: "Men's Slim Fit Denim Jeans - Black",
    //   image: "https://5.imimg.com/data5/LS/IO/EM/SELLER-86680741/mens-denim-black-faded-jeans-500x500.jpg",
    //   price: 49.99,
    //   stock: 15,
     
    // },
    // {
    //   id: 3,
    //   title: "Men's Formal Leather Shoes - Brown",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZWjmQAfHMOscBUhGqwAtUbY3mjkpCzBqsA&s",
    //   price: 79.99,
    //   stock: 0,
      
    // },
  
    
    // {
    //   id: 4,
    //   title: "Women's Floral Maxi Dress - Red",
    //   image: "https://m.media-amazon.com/images/I/81wKoF3pczL._AC_UY1100_.jpg",
    //   price: 59.99,
    //   stock: 40,
      
    // },
    // {
    //   id: 5,
    //   title: "Women's High-Waisted Skinny Jeans - Blue",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjiGINTEO_CyfbLYVA_48UKDR8kH3Ey6jyg&s",
    //   price: 44.99,
    //   stock: 25,
      
    // },
    // {
    //   id: 6,
    //   title: "Women's Ankle boots  - Black",
    //   image: "https://5.imimg.com/data5/ECOM/Default/2023/2/CB/CA/EK/78653235/296d9744d936a05459c8f3a7e5ae7f09-500x500.jpg",
    //   price: 69.99,
    //   stock: 15,
      
    // }

  ]
    
  )

}
