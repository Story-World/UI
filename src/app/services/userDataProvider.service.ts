import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserDataProvider {
	private loggedIn: boolean;
	private showLeftPanel: boolean;
	private mobile: boolean;

	constructor(){
		this.loggedIn = false;
		this.showLeftPanel = true;
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

	public isShowLeftPanel(){
		return this.showLeftPanel;
	}

	public isMobile(){
		return this.mobile;
	}
}