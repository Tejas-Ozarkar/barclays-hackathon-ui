import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  public user = new User();

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) { }

  public signIn() {
    this.authService.signIn(this.user)
      .subscribe(resp => {
        this.router.navigateByUrl('/home');
        this.authService.setSession(resp);
      });
  }
}
