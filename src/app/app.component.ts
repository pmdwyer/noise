import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

declare var gramjs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'noise';

  phoneNumber = new FormControl('');
  password = new FormControl('');
  phoneCode = new FormControl('');

  private client: any;
  private stringSession = new gramjs.sessions.StringSession('');

  constructor() {
    const apiId = 6816460;
    const apiHash = 'd2c8f8c3b29f201c7bcb67411b521ae4';

    console.log('Loading example...');
    this.client = new gramjs.TelegramClient(
      this.stringSession,
      apiId,
      apiHash,
      {
        connectionRetries: 5,
      }
    );

    console.log(this.client);
  }

  connect() {
    this.client
      .start({
        phoneNumber: this.phoneNumber.value,
        onError: (err: any) => console.log(err),
      })
      .then((res: any) => {
        console.log(res);
      });
    console.log('You should now be connected.');
    console.log(this.client.session.save()); // Save this string to avoid logging in again
  }

  send() {
    this.client.sendMessage('me', { message: 'Hello!' });
  }
}
