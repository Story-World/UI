import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../classes/story/story.class';
import { ProxyResponse } from '../../classes/response.class';
import { StoryType } from '../../classes/story/storyType.enum';
import { StoryService } from '../../services/story/story.service';


import { UserDataProvider } from '../../services/userDataProvider.service';


@Component({
	selector: 'showStory',
	templateUrl: `../app/views/story/showStory.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [StoryService],
	encapsulation: ViewEncapsulation.None
})

export class ShowStoryComponent {
	private story: Story;
	private pageNumber: number = 0;
	private add: boolean = true;

	constructor(private userDataProvider: UserDataProvider, private storyService:StoryService, private activatedRouter: ActivatedRoute) {
		this.story = new Story;
		storyService.getStory(this.activatedRouter.snapshot.params['id']).then(res => this.handleGetStory(res));		
	}

	private handleGetStory(res:ProxyResponse){
		if(res){
			this.story = res.getStory();
			var date = new Date(this.story.date.year, this.story.date.monthValue, this.story.date.dayOfMonth);
			this.story.creationDate = date;
		}
	}

}
