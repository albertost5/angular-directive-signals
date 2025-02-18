import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.css'],
    standalone: false
})
export class ProductPageComponent {
  private fb = inject(FormBuilder);

  public color: string = 'green';
  public myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  });

  changeColor(): void {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
