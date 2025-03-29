import { Component } from '@angular/core';
import { input,output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <p>
    <button type="button" class="btn" (click)="btnClicked.emit()"  >
      {{label()}}
    </button>
    </p>
  `,
  styles: `
  .btn {
  background-color: #E63946; /* Peach Red */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* Smooth transition */
}

.btn:hover {
  background-color: #C62828; /* Yellow Orange */
  border-radius: 20px; /* Rounded edges on hover */
}
  
  `
})
export class ButtonComponent {
  label=input('')
   
    btnClicked = output()

}
