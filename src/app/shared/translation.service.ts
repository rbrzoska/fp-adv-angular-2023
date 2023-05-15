import { Injectable } from '@angular/core';

@Injectable()
export class TranslationService {

  private translations: any = {
    en: {
      'home.title': 'Welcome'
    },
    pl: {
      'home.title': 'Witaj'
    }
  }


  constructor() { }

  translate(key: string, lang: string) {
    const translations = this.translations[lang] || this.translations['en'];

    return translations[key] ?? key;
  }

}
