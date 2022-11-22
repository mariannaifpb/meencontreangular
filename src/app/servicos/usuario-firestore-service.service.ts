import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Lugares} from './lugar';
import {UsuCad} from './usuarios_cadastrar';
import {UsuEnt} from './usuarios_entrar';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
 
@Injectable({
 providedIn: 'root'
})
export class UsuarioFirestoreService {
 
 UsuEnt_: AngularFirestoreCollection<UsuEnt>;
 UsuCad_: AngularFirestoreCollection<UsuCad>;
 places: AngularFirestoreCollection<Lugares>;
 new_UsuEnt = 'usuarios_cadastrados';
 new_UsuCad = 'usuarios_para_cadastrar';
 new_place = 'att_lugar'
 
 constructor(private afs: AngularFirestore) {
   this.UsuEnt_ = afs.collection(this.new_UsuEnt);
   this.UsuCad_ = afs.collection(this.new_UsuCad);
   this.places = afs.collection(this.new_place);
 }
 listar(): Observable<UsuEnt[]> {

  return this.UsuEnt_.valueChanges({idField: 'id'});
}
inserir(usuario: UsuCad): Observable<object> {
  delete usuario.id;
  return from(this.UsuCad_.add(Object.assign({}, usuario)));
}

 }