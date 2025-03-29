import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, NgIf],
  template: `
    
    <div class="header" >
    <div class="left">
    <button class="unstylebtn" routerLink="/"><span>My Store</span></button>
    <div *ngIf="userName" class="dropdown">
  <button class="dropbtn">👋 {{ userName }} ▼</button>
  <div class="dropdown-content">
    <button class="logout-btn" (click)="logout()">Logout</button>
  </div>
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
  /* Dropdown container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown button */
.dropbtn {
  background-color: #333;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 120px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  border-radius: 5px;
}

/* Logout button inside dropdown */
.dropdown-content .logout-btn {
  width: 100%;
  padding: 10px;
  text-align: left;
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.dropdown-content .logout-btn:hover {
  background: darkred;
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-content {
  display: block;
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
