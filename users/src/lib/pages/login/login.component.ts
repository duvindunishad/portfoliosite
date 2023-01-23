import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../../services/authontication.service';
import { User } from '../../models/user';
// import { AuthService } from '../../services/auth.service';
// import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  'formGroup': FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = 'Email or Password are wrong';
  loginFormGroup: any;

  constructor(
    private formBuilder: FormBuilder,
   private authontication: AuthonticationService,
   // private localstorageService: LocalstorageService,
    private router: Router
  ) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginFormGroup.invalid) return;

    // const loginData = {
    //   email: this.loginForm.email.value,
    //   password: this.loginForm.password.value
    // }
    this.authontication.login(this.loginForm.email.value, this.loginForm.password.value).subscribe((User)=>{
      console.log(User);
      this.router.navigate(['/'])
    })
    // this.authontication.login(this.loginForm['email'].value, this.loginForm['password'].value).subscribe(
    //   (user: { token: any; }) => {
    //     this.authError = false;
    //     this.localstorageService.setToken(user.token);
    //     this.router.navigate(['/']);
    //   },
    //   (error: HttpErrorResponse) => {
    //     this.authError = true;
    //     if (error.status !== 400) {
    //       this.authMessage = 'Error in the Server, please try again later!';
    //     }
    //   }
    // );
 }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
