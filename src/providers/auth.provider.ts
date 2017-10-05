import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserLogin } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    constructor(private afAuth: AngularFireAuth) {
        this.user = afAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                }
                else {
                    this.userDetails = null;
                }
            }
        );
    }

    login(user: UserLogin) {
      return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    register(user: UserLogin) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    getAuthState(){
        return this.afAuth.authState;
    }

    logout() {
        this.afAuth.auth.signOut();
    }

}
