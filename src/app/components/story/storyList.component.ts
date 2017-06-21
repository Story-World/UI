import {Component} from '@angular/core';

import {Story} from '../../classes/story/story.class';

import {StoryService} from '../../services/story/story.service';

import {ProxyResponse} from '../../classes/response.class';

@Component({
	selector: 'storyList',
	templateUrl: './storyList.component.html',
	styleUrls: ['../../styles/styles.scss']
})
export class StoryListComponent {

	private stories: Array<Story>;
	private size: number;
	private text: string;

	constructor(private storyService:StoryService) {
		this.size = 20;
		this.stories = new Array<Story>();
		this.storyService.getStories(0, this.size).then(res => this.handleGetStories(res));
		this.size+=20;

	}

	private handleGetStories(res:ProxyResponse){
		if(res){
			var responseStories: Array<Story> = res.getStories();
			responseStories.forEach(story =>{
				var date = new Date(story.date.year, story.date.monthValue, story.date.dayOfMonth);
				story.creationDate = date;
			});
			this.stories = responseStories;
		}
		console.log(this.stories);
	}

	public loadMore(){
		this.storyService.getStories(0, this.size).then(res => this.handleGetStories(res));
		this.size+=20;
	}

 }
