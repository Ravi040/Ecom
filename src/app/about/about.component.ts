import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <div class="about-container">
  <h1>About My Store</h1>
  <p>
    Welcome to <strong>My Store</strong>, your one-stop shop for quality products at unbeatable prices. 
    We are committed to providing a seamless shopping experience with a wide range of products and secure payments.
  </p>

  <h2>Our Mission</h2>
  <p>
    Our mission is to bring you the best products with the highest quality and customer satisfaction. 
    We believe in affordability, reliability, and convenience.
  </p>

  <h2>Why Choose Us?</h2>
  <ul>
    <li>🌟 High-quality and trending products</li>
    <li>🚀 Fast and secure checkout</li>
    <li>📦 Quick shipping and easy returns</li>
    <li>💬 24/7 customer support</li>
  </ul>

  <h2>Contact Us</h2>
  <p>
    Have questions? Reach out to us at <a href="mailto:support@mystore.com">{{email}}</a>.
  </p>
</div>

  `,
  styles: `
  .about-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1, h2 {
  color: #333;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: #E3F2FD;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 1rem;
}

a {
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

  
  `
})
export class AboutComponent {
  email:string="support@mystore.com"

}
