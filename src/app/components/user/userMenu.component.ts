import { Component, ViewEncapsulation } from '@angular/core';
import { UserDataProvider } from '../../services/userDataProvider.service';
import { Router } from '@angular/router';
@Component({
	selector: 'userMenu',
	templateUrl: `../app/views/user/userMenu.html`,
	styleUrls: [`../app/styles/styles.css`],
	encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent  { 
	admin:boolean;
	constructor(private userDataProvider:UserDataProvider, private router: Router){
		if(!this.userDataProvider.isLoggedIn()){
			this.router.navigateByUrl("");
		}
		this.admin=true;
	}
	isAdmin(){
		return this.admin;
	}
}