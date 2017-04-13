import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Story } from '../../classes/story/story.class';

import { ProxyResponse } from '../../classes/response.class';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
	selector: 'addStory',
	templateUrl: `../app/views/story/addStory.html`,
	styleUrls: [`../app/styles/styles.css`]
})

export class AddStoryComponent {
	private story:Story;

	constructor(private userDataProvider: UserDataProvider, private router:Router) {
		if(!this.userDataProvider.isLoggedIn()){
			this.router.navigate(['/login']);
		}
	}

	public add(){
		
	}
}