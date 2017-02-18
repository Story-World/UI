import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserPanelComponent } from './user/userPanel.component';
import { UserDataProvider } from '../services/userDataProvider.service';

@Component({
  selector: 'storyWorld',
  templateUrl: `../app/views/app.html`,
  styleUrls: [`../app/styles/styles.css`]
})
export class StoryWorldComponent implements OnInit{
	ngOnInit(){
		this.userDataProvider.setLoggedIn(true);
	}

	constructor(private userDataProvider:UserDataProvider){};

	public isLoggedIn(){
		return this.userDataProvider.isLoggedIn();
	}

	public setLoggedIn(logged: boolean){
		this.userDataProvider.setLoggedIn(logged);
	}

}
