import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[appForLoggedInUsers]'
})
export class ForLoggedInUsersDirective implements OnInit {

  @Input() appForLoggedInUsers!: boolean;
  constructor(private _authService: AuthService,
    private _templ: TemplateRef<any>,
    private _vcr: ViewContainerRef) {

  }

  ngOnInit(): void {
    this._authService.isLoggedIn$.subscribe(isLoggedIn => {
      this._vcr.clear();
      if((isLoggedIn && this.appForLoggedInUsers) || (!isLoggedIn && !this.appForLoggedInUsers)){
        this._vcr.createEmbeddedView(this._templ)
      }

    })
  }
}
