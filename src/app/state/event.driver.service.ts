import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ActionEvent} from './product.state';

@Injectable({providedIn: "root"})
export class EventDriverService {
  // Subject
  sourceEventSubject: Subject<ActionEvent> = new Subject<ActionEvent>();
  // Observable to be subscribed to
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();

  // Publisher
  publicEvent(event: ActionEvent) {
    this.sourceEventSubject.next(event);
  }


}
