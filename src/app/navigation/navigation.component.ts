import { Component } from '@angular/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  selectedLang: string;
  constructor(private _translationService: TranslationService) {
    this.selectedLang = this._translationService.selectedLanguage;

  }

  changeLanguage(lang: string) {
    this._translationService.changeLanguage(lang);
    this.selectedLang = this._translationService.selectedLanguage;
  }
}
