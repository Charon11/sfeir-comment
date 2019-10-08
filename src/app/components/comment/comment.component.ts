import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../shared/comment.model';
import {DomSanitizer} from '@angular/platform-browser';
import * as firebase from 'firebase/app';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {CommentService} from '../../core/services/comment.service';
import {EditCommentDialogComponent} from '../edit-comment-dialog/edit-comment-dialog.component';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input('comment') private _comment: Comment;

  constructor(private _sanitizer: DomSanitizer,
              private commentService: CommentService,
              private _snackBar: MatSnackBar,
              private dialog: MatDialog,
              private authService: AuthService) { }

  ngOnInit() {
  }

  public isCurrentUser(): boolean {
    return this.authService.currentUser && this.comment.userId === this.authService.currentUser.uid;
  }

  public get snackbar() {
    return this._snackBar;
  }
  public get comment(): Comment {
    return this._comment;
  }

  public get photoUrl() {
    return this.comment.userImageUrl ?
      this._sanitizer.bypassSecurityTrustStyle(`url(${this.comment.userImageUrl})`) :
      this._sanitizer.bypassSecurityTrustStyle(`url("https://firebasestorage.googleapis.com/v0/b/test-comment-2acc0.appspot.com/o/profile-image%2Fdefault_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png?alt=media&token=860895cc-84b4-4266-b239-bb13f255f243")`);
  }

  editComment() {
    this.dialog.open(EditCommentDialogComponent, {
      data : this.comment,
      width: '90%',
    });
  }

  deleteComment() {
    this.snackbar.open('Supprimer le commentaire ?', 'Supprimer', {duration: 3000})
      .onAction().subscribe(() => this.commentService.deleteComment(this.comment.id));
  }
}
