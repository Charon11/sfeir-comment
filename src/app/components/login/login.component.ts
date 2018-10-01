import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth,
    private _sanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.afAuth.authState.subscribe(user =>
      this.router.navigate(['/comments']),
      err =>
        console.log(err.message)
    );
  }

  ngOnInit() {
  }

  public get photoUrl() {
    return this._sanitizer.bypassSecurityTrustStyle(`url("https://firebasestorage.googleapis.com/v0/b/test-comment-2acc0.appspot.com/o/profile-image%2Fdefault_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png?alt=media&token=860895cc-84b4-4266-b239-bb13f255f243")`);
  }


}
