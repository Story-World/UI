import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
	selector: 'userPanel',
	templateUrl: `../app/views/user/userPanel.html`,
	styleUrls: [`../app/styles/styles.css`]
})
export class UserPanelComponent { 
	constructor(private userDataProvider:UserDataProvider, private router: Router){};

	public isLoggedIn(){
		return this.userDataProvider.isLoggedIn();
	}

	public setLoggedIn(logged: boolean){
		this.userDataProvider.setLoggedIn(logged);
	}

	public logout(){
		this.userDataProvider.logOut();
		this.router.navigateByUrl("/login");
	}
}