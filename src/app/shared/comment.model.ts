import {firestore} from 'firebase';
import Timestamp = firestore.Timestamp;


export interface Comment {
  id?: string;
  title: string;
  editedDate: Timestamp;
  content: string;
  userName: string;
  userId: string;
  userImageUrl: string;
}
