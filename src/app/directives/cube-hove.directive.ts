import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appCubeHover]',
})
export class CubeHoveDirective {
  @HostBinding('style.background') backgroundColor: string =
    this.elref.nativeElement;

  @HostListener('mouseover') mouseover(event: Event) {
    this.backgroundColor = 'linear-gradient(0, yellow 50%, blue 50%)';
  }
  constructor(private elref: ElementRef) {}
}
