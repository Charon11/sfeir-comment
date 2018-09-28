import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private _errorMessage: string;
  private _successMessage: string;

  registerForm: FormGroup;

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  tryRegister(value) {
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this._errorMessage = '';
        this._successMessage = 'Your account has been created';
        this.router.navigate(['/user']);
      }, err => {
        console.log(err);
        this._errorMessage = err.message;
        this._successMessage = '';
      });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
          this.router.navigate(['/user']);
        }, err => console.log(err)
      );
  }

  public get errorMessage() {
    return this._errorMessage;
  }

  public get successMessage() {
    return this._successMessage;
  }
}
