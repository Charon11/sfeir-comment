import {Injectable} from '@angular/core';
import {Comment} from '../../shared/comment.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable()
export class CommentService {

  private _comments: AngularFirestoreCollection<Comment>;

  constructor(private _fbDataBase: AngularFirestore) {
    this._comments = this._fbDataBase.collection('comments');
  }

  get comments(): Observable<Array<Comment>> {
    return this._comments.valueChanges();
  }

  public addComment(c: Comment) {
    c.id = this._fbDataBase.createId();
    return this.saveComment(c);
  }

  public saveComment(c: Comment) {
    return this._comments.doc(c.id).set(c);
  }

  public deleteComment(id: string) {
    return this._comments.doc(id).delete();
  }
}
