import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../../core/user.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  private _errorMessage: string;
  private _successMessage: string;

  user: FirebaseUserModel = new FirebaseUserModel();
  _profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private _sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      const data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    });
  }

  createForm(name) {
    this._profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value) {
    this.userService.updateCurrentUser(value)
      .then(res => {
        console.log(res);
      }, err => console.log(err));
  }

  logout() {
    this.authService.doLogout()
      .then(() => {
        this.location.back();
      }, (error) => {
        console.log('Logout error', error);
      });
  }

  public get errorMessage() {
    return this._errorMessage;
  }

  public get successMessage() {
    return this._successMessage;
  }

  public get photoUrl() {
    return this.user.image ?
      this._sanitizer.bypassSecurityTrustStyle(`url(${this.user.image})`) :
      this._sanitizer.bypassSecurityTrustStyle(`url("https://firebasestorage.googleapis.com/v0/b/test-comment-2acc0.appspot.com/o/profile-image%2Fdefault_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png?alt=media&token=860895cc-84b4-4266-b239-bb13f255f243")`);
  }

  public get profileForm() {
    return this._profileForm;
  }
}
