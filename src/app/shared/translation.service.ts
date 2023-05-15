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


}
