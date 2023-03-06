import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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


export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollMe', {static: false}) scrollFrame: ElementRef | undefined;
  @HostListener('window:message', ['$event'])
  onEvent(ev: any) {
    if (ev.data.event === 'calendly.event_scheduled') {
      console.log('Scheduled done');
      console.log(ev.data.payload);

      this.step++;
      this.addMessage(this.questions[this.step], false);
    }
  }

  private scrollContainer: any;

  step: number = 0;
  messages: Message[] = [];
  questions: string[] = [
    'What is your first name?',
    'What is your last name?',
    'What is your email address?',
    'What is your date of birth?',
    'What gender are you?',
    'Please rate your level of satisfaction with our services.',
    'Schedule a meeting on Calendly',
    'Meeting scheduled. Click submit to submit form.'
  ];

  genderOptions = ['Male', 'Female', 'Other'];


  form = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    gender: new FormControl('', Validators.required),
    satisfaction: new FormControl(0, Validators.required)
  })

  constructor (private fb: FormBuilder) {}

  ngAfterViewInit(): void {
    this.scrollContainer = this.scrollFrame!.nativeElement;
    this.addMessage(this.questions[this.step], false);
  }

  ngOnInit(): void {
  }

  addMessage (content: string, user: boolean) {
    this.messages.push({content, user});
    this.scrollToBottom();
  }

  handleNewInfo (info: any) {
    this.addMessage(info.toString(), true);
    this.step++;
    setTimeout(() => {
      this.addMessage(this.questions[this.step], false);
    }, 500);
  }

  handleSubmit () {
    console.log(this.form.value);
  }

  scrollToBottom(): void {             
    if(this.scrollContainer)
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
  