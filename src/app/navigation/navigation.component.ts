import { Component } from '@angular/core';
import { TranslationService } from '../shared/translation.service';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { NotificationsService } from '../shared/notifications.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isLoggedIn$: Observable<boolean>;

  selectedLanguage$: Observable<string>;
  constructor(private _notifications: NotificationsService, private _translationService: TranslationService, private _authService:AuthService) {
    this.selectedLanguage$ = this._translationService.selectedLanguage$;
    this.isLoggedIn$ = this._authService.isLoggedIn$;

  }

  changeLanguage(lang: string) {
    this._translationService.changeLanguage(lang);
  }

  login() {
    this._authService.logIn()
  }

  logout() {
    this._authService.logOut()
  }

  pushMessage() {
  this._notifications.pushMessage('halo!')
}
}
