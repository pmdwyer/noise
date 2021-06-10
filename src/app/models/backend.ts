import { Contact } from '../models/contact';

export interface Backend {
  send (person: Contact, msg: string): void;
}