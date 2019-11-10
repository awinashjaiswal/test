import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as R from 'ramda';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  Topics = [];
  subject = new Subject();
  constructor() {
  }

  sendMsg(topicId, msg, callerId) {
    // this.Topics[topicId].next({ msg, callerId});
    const index = R.findIndex(R.propEq('topicId', topicId))(this.Topics);
    if (index !== -1) {
      this.Topics[index] = {...this.Topics[index], msg, callerId};
      this.subject.next(this.Topics);
    } else {
      this.Topics.push({topicId, msg, callerId});
      this.subject.next(this.Topics);
    }
  }

  onMsg(topicId, id, fn: (msg) => void) {
    // return this.Topics[topicId].asObservable();
    const subscription = this.subject.subscribe(newMsg => {
      const index = R.findIndex(R.propEq('topicId', topicId))(this.Topics);
      if ( index !== -1 && topicId === this.Topics[index].topicId && id !== this.Topics[index].callerId ) {
        fn(this.Topics[index].msg);
      }
    });
    return () => {
      return subscription.unsubscribe();
    }
  }

  private static _globalMsg: MessengerService = new MessengerService();

  static get globalMsg() {
      return this._globalMsg;
  }
}
