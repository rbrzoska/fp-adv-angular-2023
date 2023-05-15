import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';



@NgModule({
  declarations: [
    TestPipe,
    TranslatePipe
  ],
  imports: [
    CommonModule
  ],

  exports: [ TestPipe, TranslatePipe ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ TranslationService ]
    }
  }
}
