import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [NgClass],
  template: `
    <button
      (click)="onClick()"
      class="border px-6 py-1 rounded text-xl font-bold shadow shadow-slate-400 hover:bg-slate-700"
      [ngClass]="{
        'bg-slate-800 text-white' : type === 'primary',
        'bg-slate-600 text-white' : type === 'secondary',
        'bg-red-800 text-white'   : type === 'danger',
        'bg-yellow-800 text-white': type === 'warning',
        'bg-green-800 text-white' : type === 'success',
        'text-sm' : size === 'sm',
        'text-lg' : size === 'lg',
        'text-xl' : size === 'xl',
        'text-2xl': size === '2xl',
      }"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  @Input() type: "primary" | "secondary" | "danger" | "warning" | "success" = "primary";
  @Input() size: "sm" | "md" | "lg" | "xl" | "2xl" = "md";
  @Input() class: string | undefined;
  @Input() disabled: boolean = false;

  @Output() myClick = new EventEmitter<number>();

  onClick() {
    this.myClick.emit(42);
  }
}
