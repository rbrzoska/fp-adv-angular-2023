import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class TranslationService {

  private _selectedLanguageSubj = new BehaviorSubject('en');
  private translations: any = {
    en: {
      'home.title': 'Welcome'
    },
    pl: {
      'home.title': 'Witaj'
    }
  }

  get selectedLanguage() {
    return this._selectedLanguageSubj.value;
  }

  // notacja zmienna$ -< finnish notation
  get selectedLanguage$() {
    return this._selectedLanguageSubj.asObservable();
  }

  constructor() { }

  translate(key: string, lang?: string) {
    const translationLanguage = lang || this.selectedLanguage;
    const translations = this.translations[translationLanguage];

    return translations[key] ?? key;
  }

  changeLanguage(lang: string) {
    this._selectedLanguageSubj.next(lang);
  }



}
