import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  get currentUser() {
    return structuredClone(this.user);
  }

  set currentUser(user) {
    this.user = user;
  }

  login(email: string, password: string) {
    return this.http
      .post('http://localhost:8080/api/users/login', {
        email,
        password,
      })
      .pipe(
        tap((user) => (this.user = user)),
        tap((user) => localStorage.setItem('user', JSON.stringify(user))),
        tap(() => this.router.navigate(['/products/view']))
      );
  }
}
