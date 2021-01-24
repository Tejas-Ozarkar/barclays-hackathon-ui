import { SnackbarService } from './../../shared/components/snackbar/snackbar.service';
import { AuthService } from './../../shared/services/auth.service';
import { UserDetails } from './../../shared/models/user_details.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public userDetails: UserDetails;

  constructor(private readonly authService: AuthService, private readonly router: Router,
    private readonly snackbar: SnackbarService) {
    this.userDetails = new UserDetails();
  }

  ngOnInit(): void {
  }

  public signUp() {
    if (!this.checkValidation()) {
      return;
    }
    console.log(this.userDetails);
    this.authService.signUp(this.userDetails)
      .subscribe(() => this.router.navigateByUrl("/auth/signin"));
  }

  private checkValidation(): boolean {
    if (this.userDetails.username == null || this.userDetails.username == '' ||
      this.userDetails.username == null || this.userDetails.username == '' ||
      this.userDetails.email == null || this.userDetails.email == '' ||
      this.userDetails.phone == null || this.userDetails.phone == '' ||
      this.userDetails.line1 == null || this.userDetails.line1 == '' ||
      this.userDetails.city == null || this.userDetails.city == '' ||
      this.userDetails.state == null || this.userDetails.state == '' ||
      this.userDetails.pincode == null || this.userDetails.pincode == '') {
      this.snackbar.show('Fill required fields', 'danger');


      return false;
    }
    if (!this.userDetails.phone.match(/^\d{10}$/)) {
      this.snackbar.show('Phone number should be 10 digit only', 'danger');
      return false;
    }
    if (!this.userDetails.phone.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      this.snackbar.show('Enter valid email', 'danger');
      return false;
    }
    return true;
  }
}
