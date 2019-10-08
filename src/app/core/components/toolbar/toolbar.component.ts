import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {



  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private _router: Router
    ) {
  }

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout()
      .then(() => {
        this._router.navigate(['/login']);
      }, (error) => {
        console.log('Logout error', error);
      });
  }

  get currentUser() {
    return this.authService.currentUser;
  }

}
