import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private _translationService: TranslationService){}

  transform(key: string, language: string): unknown {
    return this._translationService.translate(key, language);
  }

}
