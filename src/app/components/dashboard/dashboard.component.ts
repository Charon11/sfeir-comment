import { Component, OnInit } from '@angular/core';
import {Comment} from '../../shared/comment.model';
import {Observable} from 'rxjs';
import {CommentService} from '../../core/services/comment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private _comments: Observable<Array<Comment>>;

  constructor(private _commentService: CommentService) {
  }

  ngOnInit() {
    this._comments = this._commentService.comments;
  }

  public get comments(): Observable<Array<Comment>> {
    return this._comments;
  }

}
