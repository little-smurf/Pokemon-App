import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmnBorderCard') borderColor: string;
  @Input() pkmnBorderCard: string;

  
  @HostListener('mouseenter') onMouseEnter() {
    console.log("mouse enter")
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }
  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string){
    console.log("color ",this.el.nativeElement.style)
    let el = this.el.nativeElement;
   
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}