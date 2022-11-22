
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { firebaseConfig } from '../../../firebase.config';
import {AngularFireDatabaseModule} from "@angular/fire/database";


// @ts-ignore

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule,
    firebaseConfig,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase)

  ]

})
export class FirestoreModule { }