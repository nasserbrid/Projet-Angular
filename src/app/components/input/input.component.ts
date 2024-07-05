import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [],
  template: `
    <input 
      [name]="name"
    />
  `,
  styles: ``
})
export class InputComponent {
  @Input() name: string = "";
  @Input() ngModel: string = "";

  @Output() ngModelChange = new EventEmitter<string>();
}
