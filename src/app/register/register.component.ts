import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm!: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
      ]),
      confirm_password : new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get confirm_password() {
    return this.signUpForm.get('confirm_password');
  }

  registerForm(){
    alert("SUccessfully registered..") 
  }
}


