import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserDataProvider {
	private loggedIn: boolean;
	private showLeftPanel: boolean;

	constructor(){
		this.loggedIn = false;
		this.showLeftPanel = true;
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

	public isShowLeftPanel(){
		return this.showLeftPanel;
	}
}