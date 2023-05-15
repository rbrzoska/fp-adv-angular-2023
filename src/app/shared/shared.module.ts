import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import { TestDirective } from './test.directive';



@NgModule({
  declarations: [
    TestPipe,
    TranslatePipe,
    TestDirective
  ],
  imports: [
    CommonModule
  ],

  exports: [ TestPipe, TranslatePipe, TestDirective ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ TranslationService ]
    }
  }
}
