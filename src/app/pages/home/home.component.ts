import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Home</h1>
    <p>
      home works!{{counter}}
    </p>
    <p>counter: {{counter}}</p>
    <a routerLink="about">to about</a>
    <span 
      class="border rounded px-4 py-2 m-2 cursor-pointer select-none"
      (click)="handleClick()"
    >
      Button
    </span>
  `,
  styles: ``
})
export class HomeComponent implements OnInit {
  counter = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  handleClick() {
    this.counter++;
  }
}
