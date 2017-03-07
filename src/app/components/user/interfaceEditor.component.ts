import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
  selector: 'interfaceEditor',
  templateUrl: `../app/views/user/interfaceEditor.html`,
  styleUrls: [`../app/styles/styles.css`]
})
export class InterfaceEditorComponent{ 
	private tab:number;
	constructor(private userDataProvider: UserDataProvider, private router: Router,){
		if(!this.userDataProvider.isLoggedIn()){
			this.router.navigateByUrl("");
		}
		this.tab = 1;
	}

	public setTab(tab:number){
		this.tab=tab;
	}

	public getTab(){
		return this.tab;
	}
 }