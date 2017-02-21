import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserDataProvider {
	private loggedIn: boolean = false;
	private showLeftPanel: boolean = true;

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