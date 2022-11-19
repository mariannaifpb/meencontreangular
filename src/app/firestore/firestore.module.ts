
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { firebaseConfig } from '../../../firebase.config';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule,
    FirebaseConfig,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase)

  ]

})
export class FirestoreModule { }