import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { User } from '../classes/user/user.class';


@Injectable()
export class UserDataProvider {
	private loggedIn: boolean;
	private user: User;
	private showLeftPanel: boolean;
	private mobile: boolean;

	constructor(){
		if(JSON.parse(Cookie.get('loggedIn'))){
			this.loggedIn = JSON.parse(Cookie.get('loggedIn'));
			this.user = JSON.parse(Cookie.get('user'));
			this.showLeftPanel = true;
			console.log(this.loggedIn," zalogowany ",this.user);
		}else{
			this.loggedIn = false;
			this.showLeftPanel = false;
		}
		
		this.mobile = false;
		if(window.screen.height < 700 && window.screen.width <800){
			this.mobile = true;
		}else{
			this.mobile = false;
		}
	}

	public setLoggedIn(logged:boolean){
		this.loggedIn = logged;
	}

	public isLoggedIn(){
		return this.loggedIn;
	}

	public setShowLeftPanel(show:boolean){
		this.showLeftPanel = show;
	}

	public showHideLeftPanel(){
		this.showLeftPanel = !this.showLeftPanel;
	}

	public isShowLeftPanel(){
		return this.showLeftPanel;
	}

	public isMobile(){
		return this.mobile;
	}

	public logIn(user:User){
		Cookie.set('loggedIn', JSON.stringify(true));
		Cookie.set('user', JSON.stringify(user));
		this.user = user;
		this.loggedIn = true;
	}

	public calculateFavouritePlacesOnWidth(){
		return window.screen.width / 12;
	}

	public calculateFavouritePlacesOffWidth() {
		if (!this.mobile) {
			return (window.screen.width / 12) / 12;
		}else{
			return (window.screen.width / 12) / 3;
		}
	}
}