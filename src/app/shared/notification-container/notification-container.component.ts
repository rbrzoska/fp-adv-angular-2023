import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef

  constructor(private _notifications: NotificationsService) {

  }

  ngAfterViewInit(): void {
    this._notifications.messages$.subscribe(msg => {

       const compRef = this.container.createComponent(NotificationComponent);
       compRef.instance.message = msg;

       setTimeout(() => {
        compRef.destroy();
       }, 2000);
    })
  }

}
