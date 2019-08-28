import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {SwUpdate} from '@angular/service-worker';
import {MatDialog} from '@angular/material/dialog';
import {AddCommentDialogComponent} from './components/add-comment-dialog/add-comment-dialog.component';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  private _connected = false;

  constructor(
    private _fbDataBase: AngularFirestore,
    private swUpdate: SwUpdate,
    private _router: Router,
    private dialog: MatDialog) {
    this._fbDataBase.firestore.enablePersistence().then();
    this._router.events.subscribe(() => {
      this._connected = !!firebase.auth().currentUser;
    });
  }

  title = 'sfeir-comment';

  openDialog(): void {
    this.dialog.open(AddCommentDialogComponent, {
      width: '90%',
    });

  }

  public get connected() {
    return this._connected;
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

}
