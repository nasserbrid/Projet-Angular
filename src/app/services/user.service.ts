import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import type { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = new BehaviorSubject<User[]>([]);
  currentUsers = this.users.asObservable();

  constructor(
    private http: HttpClient
  ) {
    this.http.get<User[]>("http://localhost:3000/users")
             .pipe()
             .toPromise()
             .then((r) => {
                if (!r) return;
                this.users.next(r);
             })
  }
  
  addUser(user: Omit<User, "id">) {
    this.http.post<User>("http://localhost:3000/users", user)
             .subscribe((r) => {
               this.users.next([...this.users.getValue(), r]);
             })
  }

  removeUser(id: string) {
    this.http.delete<User>(`http://localhost:3000/users/${id}`)
             .subscribe(() => {
               this.users.next(this.users.getValue().filter(user => user.id !== id));
             })
  }

  putUser(user: User) {
    this.http.put<User>(`http://localhost:3000/users/${user.id}`, user)
             .subscribe((r) => {
               this.users.next(this.users.getValue().map(user => user.id === r.id ? r : user));
             })
  }
}
