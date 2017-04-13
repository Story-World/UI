import { Component } from '@angular/core';
import { UserDataProvider } from '../services/userDataProvider.service';
import { Router } from '@angular/router';

@Component({
	selector: 'menu',
	templateUrl: `../app/views/menu.html`,
	styleUrls: [`../app/styles/styles.css`]
})
export class MenuComponent  {
	constructor(private userDataProvider:UserDataProvider){
		
	}

	public isLoggedIn(){
		return this.userDataProvider.isLoggedIn();
	}

	public setLoggedIn(logged: boolean){
		this.userDataProvider.setLoggedIn(logged);
	}
}
