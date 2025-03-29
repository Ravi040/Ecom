import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink,NgIf],
  template: `
    
    <div class="header" >
    <div class="left">
    <button class="unstylebtn" routerLink="/"><span>My Store</span></button>
    <div *ngIf="userName">
    <span  class="user-info">
    👋 {{ userName }}  
    <button class="logout-btn" (click)="logout()">Logout</button>
  </span>
    </div>
    
  
    
    </div>
    <div class="right">
    <a routerLink="/about">About</a>
      <a routerLink="/login">Login</a>
      <a routerLink="/signup">Signup</a>
      <app-primary-button class="padbtn" [label]="'cart ('+cartService.cart().length+')'"
      routerLink="/cart"/>

    </div>
      
      
    </div>   
    
  `,
  styles: `
  .unstylebtn{
    all: unset; /* Removes all default styles */
    cursor: pointer; /* Optional: Keeps pointer cursor */
  }

  `
})
export class HeaderComponent {

  cartService = inject(CartService);

  userName: string | null = '';

  constructor(private router: Router) {
    
  }

  ngOnInit() {
   
    this.userName = JSON.parse(localStorage.getItem('loggedInUser') || 'null');

    
  }
  logout() {
    localStorage.removeItem('loggedInUser');
    // alert('🚪 Logged out successfully!');
    this.router.navigate(['/login']);
  

  }
  
    
  

  

}
