import { Component, Input, OnInit } from '@angular/core';

export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-calendly-widget',
  templateUrl: './calendly-widget.component.html',
  styleUrls: ['./calendly-widget.component.css']
})
export class CalendlyWidgetComponent implements OnInit {

  @Input() name! : string;
  @Input() email! : string;
  
  ngOnInit(): void {
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/samiya-kazi09',
      parentElement: document.querySelector('.calendly-inline-widget'),
      prefill: {
        name: this.name,
        email: this.email
      }
    });
  }

}
