import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'ui-collapse',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border-b border-slate-400 pb-2 flex flex-col gap-2">
      <div 
        (click)="collapseToggle.emit(!isOpen)"
        class="font-semibold flex justify-between items-center cursor-pointer"
      >
        <span>{{ title }}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 inline-block"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </div>
      @if (isOpen) {
        <div class="text-sm text-slate-300">
          <ng-content></ng-content>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class CollapseComponent {
  @Input() title: string = "";
  @Input() isOpen: boolean = false;
  @Output() collapseToggle = new EventEmitter<boolean>();
}
