import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MessagesComponent } from './messages/messages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MessagesComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Tour of Heroes';
}
