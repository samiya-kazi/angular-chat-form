import { Component, OnInit } from '@angular/core';
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


export class ChatComponent implements OnInit {

  step: number = 0;
  messages: Message[] = [];
  questions: string[] = [
    'What is your first name?',
    'What is your last name?',
    'What is your email address?',
    'What is your date of birth?',
    'What gender are you?',
    'Please rate your level of satisfaction with our services.',
    'Click submit to submit form.'
  ];

  genderOptions = ['Male', 'Female', 'Other'];


  form = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    satisfaction: new FormControl('', Validators.required)
  })

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addMessage(this.questions[this.step], false);
  }

  addMessage (content: string, user: boolean) {
    this.messages.push({content, user});
  }

  handleNewInfo (info: any) {
    this.addMessage(info.toString(), true);
    this.step++;
    this.addMessage(this.questions[this.step], false);
  }

  handleSubmit () {
    console.log(this.form.value);
  }
}
