import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserDataProvider {
	private loggedIn: boolean = false;

	setLoggedIn(logged:boolean){
		this.loggedIn = logged;
	}

	isLoggedIn(){
		return this.loggedIn;
	}
}