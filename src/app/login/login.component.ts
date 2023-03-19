import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signInForm!: FormGroup;

  constructor() {
    this.signInForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  get name() {
    return this.signInForm.get('name');
  }
  get password() {
    return this.signInForm.get('password');
  }

  loginUser(){
    alert("Succesfully Login.....");
  }
}
