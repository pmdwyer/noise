import { Injectable } from '@angular/core';

import { Backend } from '../models/backend';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class Signal implements Backend {
  send(person: Contact, msg: string): void {
    throw new Error('Method not implemented.');
    console.log('Sending to person "' + person.name + '": ' + msg);
  }
}