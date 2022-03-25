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
  possibleColors = ['red', 'blue', 'green'];
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.elref.nativeElement;
  @HostBinding('style.color') color: string = this.elref.nativeElement;

  constructor(private elref: ElementRef) {}
  @HostListener('click') mouseenter() {
    this.backgroundColor = this.background_color;
    this.color = this.font_color;
  }

  ngOnInit(): void {}
}
