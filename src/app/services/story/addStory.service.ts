import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { Story } from '../../classes/story/story.class';

@Injectable()
export class AddStoryService {
	constructor(private proxyService:ProxyService) { 
	}

	public addStory(story:Story, token:String){
		let request = new Request();
		request.setToken(token);
		request.setStory(story);

		console.log(story);
		return this.proxyService.post("story/add",request);
	}
}