import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <p>
    <button type="button" class="btn" (click)="btnClicked.emit()">
      {{label()}}
    </button>
    </p>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label=input('')

  btnClicked = output()

 

}
