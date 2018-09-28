import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Comment {
  id?: string;
  title: string;
  editedDate: Timestamp;
  content: string;
  userName: string;
  userId: string;
  userImageUrl: string;
}
