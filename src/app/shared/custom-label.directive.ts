import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'red';

  @Input() public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  constructor(el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
  }

  setStyle(): void {
    if( !this.htmlElement ) return;
    this.htmlElement.nativeElement.style.color = this._color
  }
}
