import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInactivo]'
})
export class InactivoDirective {

  @Input() appInactivo = '';
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appInactivo);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.el.nativeElement.style.backgroundColor = '';
  }

  private highlight(valor: string) {
    if(valor == 'INACTIVO'){
      this.el.nativeElement.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
    }else{
      this.el.nativeElement.style.backgroundColor = '';
    }
  }

}
