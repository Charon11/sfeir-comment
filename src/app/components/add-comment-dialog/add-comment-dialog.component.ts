import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../../shared/comment.model';
import {CommentService} from '../../core/services/comment.service';
import {firestore} from 'firebase';
import Timestamp = firestore.Timestamp;
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
  styleUrls: ['./add-comment-dialog.component.scss']
})
export class AddCommentDialogComponent implements OnInit {

  private _addCommentForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddCommentDialogComponent>,
              private commentService: CommentService,
              private fb: FormBuilder,
              private authService: AuthService) {
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
    const currentUser = this.authService.currentUser;
    const comment: Comment = {
      ...this._addCommentForm.value,
      userName: currentUser.displayName,
      userImageUrl: currentUser.photoURL,
      userId: currentUser.uid,
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
