import { Component, ViewEncapsulation } from '@angular/core';

import { Story } from '../../classes/story/story.class';

import { StoryService } from '../../services/story/story.service';

import { ProxyResponse } from '../../classes/response.class';

@Component({
	selector: 'storyList',
	templateUrl: `../app/views/story/storyList.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [StoryService],
	encapsulation: ViewEncapsulation.None
})

export class StoryListComponent {
	private stories: Array<Story>;

	constructor(private storyService:StoryService) {
		this.stories = new Array<Story>();
		this.storyService.getStories(0, 10).then(res => this.handleGetStories(res));
	}

	private handleGetStories(res:ProxyResponse){
		if(res){
			this.stories = res.getStories();
		}
	}


}
