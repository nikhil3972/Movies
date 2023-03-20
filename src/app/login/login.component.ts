import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  bLogin = true;

  displayLogin() {
    this.bLogin = true;
  }

  displayRegister() {
    this.bLogin = false;
  }

  //User can login by this information
  loginUser = [
    new Login('nikhil123@gmail.com', 'admin', 'admin'),
  ];
  loginUsername = new FormControl('');
  loginPassword = new FormControl('');

  //For login of user
  loginDone() {
    let obj: any = this.loginUser.find(o => o.username === this.loginUsername.value);

    if (obj != null && this.loginPassword.value === obj.password) {
      alert("Login Successfully");
      this.router.navigate(['/home']);
    }
    else {
      alert("Please Enter Correct Details");
    }
  }

  registerEmail = new FormControl('');
  registerUsername = new FormControl('');
  registerPassword = new FormControl('');
  registerConfirm = new FormControl('');

  ////For register of user
  registerDone() {
    if (this.registerUsername.value != '' && this.registerEmail.value != '' && this.registerPassword.value != '' && this.registerPassword.value === this.registerConfirm.value) {
      this.loginUser.push(new Login(this.registerEmail.value, this.registerUsername.value, this.registerPassword.value));
      alert("Register Successfully");
    }
    else {
      alert("Please Enter Correct Details");
    }
  }
}
