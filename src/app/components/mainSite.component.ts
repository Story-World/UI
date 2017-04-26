import { Component } from '@angular/core';

import { UserDataProvider } from '../services/userDataProvider.service';

@Component({
	selector: 'mainSite',
	templateUrl: `../app/views/mainSite.html`,
	styleUrls: [`../app/styles/styles.css`]
})
export class MainSiteComponent  { 
	constructor(private userDataProvider:UserDataProvider){};

	public hasRole(id:number):Boolean{
		return this.userDataProvider.hasRole(id);
	}
}