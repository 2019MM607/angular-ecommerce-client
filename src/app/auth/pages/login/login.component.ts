import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public email = new FormControl<string>('');
  public password = new FormControl<string>('');
  public authService = inject(AuthService);

  constructor() {}

  onLogin(): void {
    this.authService
      .login(this.email.value as string, this.password.value as string)
      .subscribe();
  }
}
