import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div class="container flex flex-col justify-center items-center gap-6">
        <h1 class="text-6xl font-bold select-none">{{ counter }}</h1>
        <div class="flex gap-3">
          <button 
            class="w-16 border px-6 py-1 rounded text-xl font-bold hover:bg-slate-700 shadow shadow-slate-400"
            (click)="handleIncrement('-')"
          >
            -
          </button>
          <button 
            class="w-16 border px-6 py-1 rounded text-xl font-bold hover:bg-slate-700 shadow shadow-slate-400"
            (click)="handleIncrement('+')"
          >
            +
          </button>
        </div>
    </div>
  `,
  styles: `
  .container {
    min-height: calc(100vh - 100px);
  }
  `
})
export class CounterComponent {
  counter = 0;

  handleIncrement(type: "+" | "-") {
    this.counter = type === "+" ? this.counter + 1 : this.counter - 1;
  }
}
