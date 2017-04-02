import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Observable';

import { User } from '../classes/user/user.class';
import { ProxyResponse } from '../classes/response.class';


@Injectable()
export class UserDataProvider {
	private loggedIn: boolean;
	private logged = new Subject<boolean>();
	private token: String;
	private user: User;
	private showLeftPanel: boolean;
	private mobile: boolean;

	constructor(){
		if(JSON.parse(Cookie.get('loggedIn'))){
			this.loggedIn = JSON.parse(Cookie.get('loggedIn'));
			this.user = JSON.parse(Cookie.get('user'));
			this.token = JSON.parse(Cookie.get('token'));
			this.logged.next(true);
			this.showLeftPanel = true;
		}else{
			this.loggedIn = false;
			this.logged.next(false);
			this.showLeftPanel = false;
		}
		
		this.mobile = false;
		if(window.screen.height < 700 && window.screen.width <800){
			this.mobile = true;
		}else{
			this.mobile = false;
		}
	}

	public getToken(){
		return this.token;
	}

	public setLoggedIn(logged:boolean){
		this.loggedIn = logged;
		this.logged.next(logged);
	}

	public isLoggedIn(){
		return this.loggedIn;
	}

	public isLogged(): Observable<boolean> {
		return this.logged.asObservable();
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

	public logIn(res:ProxyResponse){
		Cookie.set('loggedIn', JSON.stringify(true));
		Cookie.set('user', JSON.stringify(res.getUser()));
		Cookie.set('token', JSON.stringify(res.getUser().token));
		this.token = res.getUser().token;
		this.user = res.getUser();
		this.setLoggedIn(true);
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