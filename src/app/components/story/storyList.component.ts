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
	private listSize: number;
	private filters: boolean;

	constructor(private storyService:StoryService) {
		this.size = 20;
		this.stories = new Array<Story>();
		this.listSize = 0;
		this.filters = false;
		this.storyService.getStories(0, this.size, null).then(res => this.handleGetStories(res));
		this.size+=20;
	}

	private handleGetStories(res:ProxyResponse<Story>){
		if(res){
			this.stories = res.getList();
			this.listSize = this.stories.length;
		}
	}

	public search(){
		this.storyService.getStories(0, 20, this.text).then(res => this.handleGetStories(res));
	}

	public reset(){
		this.text = null;
		this.storyService.getStories(0, 20, this.text).then(res => this.handleGetStories(res));
	}

	public showFilters(){
		if(this.filters)
			this.filters = false;
		else
			this.filters = true;
	}

}
