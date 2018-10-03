import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../core/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../shared/comment.model';
import * as firebase from 'firebase';
import {CommentService} from '../../core/services/comment.service';
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
  styleUrls: ['./add-comment-dialog.component.scss']
})
export class AddCommentDialogComponent implements OnInit {

  private _addCommentForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddCommentDialogComponent>,
              private userService: UserService,
              private commentService: CommentService,
              private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this._addCommentForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addComment() {
    const comment: Comment = {
      ...this._addCommentForm.value,
      userName: firebase.auth().currentUser.displayName,
      userImageUrl: firebase.auth().currentUser.photoURL,
      userId: firebase.auth().currentUser.providerData[0].uid,
      editedDate: Timestamp.now()
    };
    this.commentService.addComment(comment).then((res) => {
        this.dialogRef.close();
      }, err => console.log(err)
    );
  }

  get addCommentForm(): FormGroup {
    return this._addCommentForm;
  }
}
