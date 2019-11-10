import { MessengerService } from './messenger.service';

export class Mondrian {
    id: string;
    topicId;
    subscription: any;
    constructor(id) {
        this.id = id;
    }

    sendMsg(topicId, msg) {
        MessengerService.globalMsg.sendMsg(topicId, msg, this.id);
    }
    onMsg(topicId, fn: (msg) => void) {
    MessengerService.globalMsg.onMsg(topicId, this.id, newMsg => {
        fn(newMsg);
    });
    }
}
