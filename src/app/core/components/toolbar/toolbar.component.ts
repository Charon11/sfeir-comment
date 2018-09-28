import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Location} from '@angular/common';
import * as firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  connected = false;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private _router: Router,
    private location: Location
    ) {
    this._router.events.subscribe(() => {
      this.connected = !!firebase.auth().currentUser;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout()
      .then(() => {
        this.location.back();
      }, (error) => {
        console.log('Logout error', error);
      });
  }

  public get router() {
    return this._router;
  }

}
