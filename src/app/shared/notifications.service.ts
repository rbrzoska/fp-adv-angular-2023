import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationsService {

  private _messagesSubj = new Subject<string>()

  get messages$() {
    return this._messagesSubj.asObservable();
  }
  constructor() { }

  pushMessage(msg: string) {
    this._messagesSubj.next(msg)
  }
}
