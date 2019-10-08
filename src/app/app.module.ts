import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './core/services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToolbarComponent} from './core/components/toolbar/toolbar.component';
import {CommentComponent} from './components/comment/comment.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CommentService} from './core/services/comment.service';
import { AddCommentDialogComponent } from './components/add-comment-dialog/add-comment-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EditCommentDialogComponent } from './components/edit-comment-dialog/edit-comment-dialog.component';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  // signInFlow: 'popup',
  popupMode: true,
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    CommentComponent,
    DashboardComponent,
    AddCommentDialogComponent,
    EditCommentDialogComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  entryComponents: [AddCommentDialogComponent, EditCommentDialogComponent],
  providers: [AuthService, CommentService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
