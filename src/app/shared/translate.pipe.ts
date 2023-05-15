import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private _translationService: TranslationService){}

  transform(key: string): string {
    return this._translationService.translate(key);
  }

}
