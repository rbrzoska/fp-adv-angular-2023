import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import { TestDirective } from './test.directive';
import { ForLoggedInUsersDirective } from './for-logged-in-users.directive';



@NgModule({
  declarations: [
    TestPipe,
    TranslatePipe,
    TestDirective,
    ForLoggedInUsersDirective
  ],
  imports: [
    CommonModule
  ],

  exports: [ TestPipe, TranslatePipe, TestDirective, ForLoggedInUsersDirective]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ TranslationService ]
    }
  }
}
