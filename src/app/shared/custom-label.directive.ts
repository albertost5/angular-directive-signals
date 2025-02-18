import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Directive({
    selector: '[customLabel]',
    standalone: false
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value: ValidationErrors | null | undefined ) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if( !this.htmlElement ) return;
    this.htmlElement.nativeElement.style.color = this._color
  }

  setErrorMessage():void {
    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors: string[] = Object.keys(this._errors);

    if (errors.includes('required'))  {
      this.htmlElement.nativeElement.innerText = 'This field is required.';
      return;
    }

    if (errors.includes('minlength'))  {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `Min ${current}/${ min } chars.`;
      return;
    }

    if (errors.includes('email'))  {
      this.htmlElement.nativeElement.innerText = 'Provide an email format.';
      return;
    }
  }
}
