import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Comment} from '../../shared/comment.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentService} from '../../core/services/comment.service';
import {firestore} from 'firebase';
import Timestamp = firestore.Timestamp;

@Component({
  selector: 'app-edit-comment-dialog',
  templateUrl: './edit-comment-dialog.component.html',
  styleUrls: ['./edit-comment-dialog.component.scss']
})
export class EditCommentDialogComponent implements OnInit {

  private _editCommentForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private _comment: Comment,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<EditCommentDialogComponent>,
              private commentService: CommentService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this._editCommentForm = this.fb.group({
      title: [this.comment.title, Validators.required],
      content: [this.comment.content, Validators.required]
    });
  }

  saveComment() {
    this.comment.editedDate = Timestamp.now();
    this.comment.title = this._editCommentForm.get('title').value;
    this.comment.content = this._editCommentForm.get('content').value;
    this.commentService.saveComment(this.comment).then(
      () => this.dialogRef.close(),
        err => console.log(err)
    );
  }

  get comment() {
    return this._comment;
  }

  get editCommentForm() {
    return this._editCommentForm;
  }

}
