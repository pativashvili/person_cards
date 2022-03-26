import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appStatusColor]',
})
export class StatusColorDirective implements OnInit {
  @Input() background_color: string = 'yellow';
  @Input() font_color: string = 'black';
  @Input() status!: string | undefined;

  originalColor = '';
  originalFontColor = '';

  constructor(private elref: ElementRef) {}
  @HostListener('click')
  changeColor() {
    const element = this.elref.nativeElement.style;
    if (element.background == this.originalColor) {
      element.background = this.background_color;
      element.color = this.font_color;
    } else {
      element.background = this.originalColor;
      element.color = this.originalFontColor;
    }
  }

  ngOnInit(): void {
    this.applyColors();
    this.originalColor = this.elref.nativeElement.style.background;
    this.originalFontColor = this.elref.nativeElement.style.color;
  }

  applyColors() {
    if (this.status == 'active') {
      this.elref.nativeElement.style.background = 'green';
    } else if (this.status == 'inActive') {
      this.elref.nativeElement.style.background = 'blue';
    } else {
      this.elref.nativeElement.style.background = 'red';
    }
  }
}
