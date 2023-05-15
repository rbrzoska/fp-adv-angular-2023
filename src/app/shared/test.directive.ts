import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  @Input() appTest!: boolean;
  constructor( private _templ: TemplateRef<any>, private _vcr: ViewContainerRef) {
    _vcr.createEmbeddedView(_templ)
  }

}
