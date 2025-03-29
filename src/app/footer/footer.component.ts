import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
   <!-- Footer -->
<footer class="text-center text-lg-start bg-dark text-light">
  <!-- Section: Social media -->
  
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>My Store
          </h6>
          <p>
          Mystore is a user-friendly eCommerce website offering a wide range of high-quality products. 
          We ensure a seamless shopping experience with secure payments, fast delivery, and excellent customer 
          support. Shop with confidence and discover the best deals on our platform!
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Electronics</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Men's Clothing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Hoodie</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Women's Clothing</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p> Marol,Andheri East Mumbai-400059</p>
          
          <p> 9082205095</p>
          <p> 8691969838</p> 
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2025 Copyright:
    <a class="text-reset fw-bold" routerLink="/">Mystore.com</a>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
  `,
  styles: `
  footer {
  padding-top: 10px;
}
  
  `
})
export class FooterComponent {

}
