import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {SwUpdate} from '@angular/service-worker';
import {MatDialog} from '@angular/material';
import {AddCommentDialogComponent} from './components/add-comment-dialog/add-comment-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _fbDataBase: AngularFirestore,
              private swUpdate: SwUpdate,
              private dialog: MatDialog) {
    this._fbDataBase.firestore.enablePersistence().then();
    this._fbDataBase.firestore.settings({
      timestampsInSnapshots: true
    });
  }

  title = 'sfeir-comment';

  openDialog(): void {
    this.dialog.open(AddCommentDialogComponent, {
      width: '90%',
    });

  }

}
