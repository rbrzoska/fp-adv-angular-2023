import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  @Input()
  set appTest(val: boolean) {
    this._vcr.clear()
    if(val) {
      this._vcr.createEmbeddedView(this._templ)
    }
  };
  constructor( private _templ: TemplateRef<any>, private _vcr: ViewContainerRef) {
  }


}
