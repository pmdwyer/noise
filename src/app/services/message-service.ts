import { Injectable, Inject } from '@angular/core';

import { Conversation } from '../models/conversation';
import { Backend } from '../models/backend';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(@Inject('Backend') backends: Backend[]) { }

  send(convo: Conversation, msg: string) {
  }
}
