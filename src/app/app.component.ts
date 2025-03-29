import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  template: `  
     <app-header/>  
     <router-outlet/>
     <app-footer/>
  `,
  styles: '',
})
export class AppComponent {
  // title = 'angular-ecommerce';
}
