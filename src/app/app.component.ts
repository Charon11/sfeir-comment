import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {SwUpdate} from '@angular/service-worker';
import {MatDialog} from '@angular/material/dialog';
import {AddCommentDialogComponent} from './components/add-comment-dialog/add-comment-dialog.component';
import {Router} from '@angular/router';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private _fbDataBase: AngularFirestore,
    private swUpdate: SwUpdate,
    private _router: Router,
    private dialog: MatDialog,
    public authService: AuthService) {
    this._fbDataBase.firestore.enablePersistence({synchronizeTabs: true}).then();
  }

  title = 'sfeir-comment';

  openDialog(): void {
    this.dialog.open(AddCommentDialogComponent, {
      width: '90%',
    });

  }

  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm('New version available. Load New Version?')) {

          window.location.reload();
        }
      });
    }
  }

  get currentUser() {
    return this.authService.currentUser;
  }

}
