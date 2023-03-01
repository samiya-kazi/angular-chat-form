import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  @Input() step!: number;
  @Input() type! : string;
  @Input() control! : FormControl;
  @Input() selectOptions! : string[] | undefined;

  @Output() nextStepEvent = new EventEmitter();

  handleSend () {
    if (this.control.valid) {
      this.nextStepEvent.emit(this.control.value);
    } else {
      console.log(this.control.errors);
    }
  }
}
