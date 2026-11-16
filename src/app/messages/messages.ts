import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { MessageService } from '../message';

@Component({
  standalone: true,
  selector: 'app-messages',
  imports: [NgFor, NgIf],
  templateUrl: './messages.html',
  styleUrls: ['./messages.css'],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
