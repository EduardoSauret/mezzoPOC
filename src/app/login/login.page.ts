import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	username = '';
	password = '';

	constructor(public afAuth: AngularFireAuth, public user: UserService, public router: Router) { }

	ngOnInit() {
	}

	async login() {
		console.log('login clicked');
		this.router.navigate(['/artists/home']);
		// const { username, password } = this;
		// try {
		// 	// kind of a hack.
		// 	const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@luxilab.com', password);

		// 	if (res.user) {
		// 		this.user.setUser({
		// 			username,
		// 			uid: res.user.uid
		// 		});
		// 		this.router.navigate(['/tabs/home']);
		// 	}

		// } catch (err) {
		// 	console.dir(err);
		// 	if (err.code === 'auth/user-not-found') {
		// 		console.log('"User not found');
		// 	}
		// }
	}

}
