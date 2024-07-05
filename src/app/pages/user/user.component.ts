import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import type { User } from '../../types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
      <form #userForm="ngForm" (submit)="handleSubmit($event)" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="email">Email: </label>
          <input 
            id="email"
            type="text"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="email"
            name="email"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm" for="password">Password: </label>
          <input 
            id="password"
            type="password"
            class="text-slate-200 rounded bg-slate-700"
            [(ngModel)]="password"
            name="password"
          />
        </div>
        @if (error) {
          <p class="text-red-500">{{error}}</p>
        }
        <div class="flex justify-center">
          <button 
            type="submit"
            class="bg-slate-600 text-white rounded px-4 py-2"
          >Submit</button>
        </div>
      </form>
  `,
  styles: ``
})
export class UserComponent implements OnInit{
  id!: string;
  user!: User;

  email: string = "";
  password: string = "";
  error: string = "";

  constructor(
    private Router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.userService.currentUsers.subscribe(users => {
      const user = users.find(user => user.id === this.id);
      if (!user) {
        this.Router.navigate(['/error/404']);
        return;
      }
      this.user = user;
      this.email = user.email;
      this.password = user.password;
    });
  }

  handleSubmit(e: SubmitEvent) {
    if (!this.email) {
      this.error = "Email is required";
      return;
    }
    if (!this.password) {
      this.error = "Password is required";
      return;
    }

    this.userService.putUser({
      id: this.id,
      email: this.email,
      password: this.password
    });
    
    this.email = "";
    this.password = "";
    this.error = "";

    this.Router.navigate(['/users']);
  }
}
