import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';


@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective implements OnInit {

  constructor(private _titulo: ElementRef,
              private renderer: Renderer2) {  }
ngOnInit(): void {
  this.renderer.setStyle(
    this._titulo.nativeElement,
    'font-size','20px'
  )

}
}
