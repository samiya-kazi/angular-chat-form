import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

interface Message {
  content: string,
  user: boolean,
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent {

  messages: Message[] = [{content: 'What is your first name?', user: false}, {content: 'Samiya', user: true}];

  form = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', Validators.required),
    satisfaction: new FormControl('', Validators.required)
  })

  constructor (private fb: FormBuilder) {}

  addMessage (content: string, user: boolean) {
    this.messages.push({content, user});
  }
}
