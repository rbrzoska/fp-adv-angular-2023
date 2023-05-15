import { Component } from '@angular/core';
import { TranslationService } from '../shared/translation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  selectedLanguage$: Observable<string>;
  constructor(private _translationService: TranslationService) {
    this.selectedLanguage$ = this._translationService.selectedLanguage$;

  }

  changeLanguage(lang: string) {
    this._translationService.changeLanguage(lang);
  }
}
