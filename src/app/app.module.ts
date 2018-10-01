import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ServiceWorkerModule} from '@angular/service-worker';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './components/register/register.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {environment} from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './core/login.guard';
import {UserService} from './core/services/user.service';
import {AuthService} from './core/services/auth.service';
import {UserComponent} from './components/user/user.component';
import {UserResolver} from './components/user/user.resolver';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToolbarComponent} from './core/components/toolbar/toolbar.component';
import {CommentComponent} from './components/comment/comment.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CommentService} from './core/services/comment.service';
import {AuthGuard} from './core/auth.guard';
import { AddCommentDialogComponent } from './components/add-comment-dialog/add-comment-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { EditCommentDialogComponent } from './components/edit-comment-dialog/edit-comment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
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
    // AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, null,
      {
        toastMessageOnAuthSuccess: false,
        toastMessageOnAuthError: true
      }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [AddCommentDialogComponent, EditCommentDialogComponent],
  providers: [AuthService, CommentService, UserService, UserResolver, LoginGuard, AuthGuard, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
