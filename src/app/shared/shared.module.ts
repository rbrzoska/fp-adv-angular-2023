import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import { TestDirective } from './test.directive';
import { ForLoggedInUsersDirective } from './for-logged-in-users.directive';
import { NotificationsService } from './notifications.service';
import { NotificationComponent } from './notification/notification.component';
import { NotificationContainerComponent } from './notification-container/notification-container.component';



@NgModule({
  declarations: [
    TestPipe,
    TranslatePipe,
    TestDirective,
    ForLoggedInUsersDirective,
    NotificationComponent,
    NotificationContainerComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [ TestPipe, TranslatePipe, TestDirective, ForLoggedInUsersDirective, NotificationContainerComponent]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ TranslationService, NotificationsService ]
    }
  }
}
