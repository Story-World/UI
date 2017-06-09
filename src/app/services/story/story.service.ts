import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { Story } from '../../classes/story/story.class';

@Injectable()
export class StoryService {

	constructor(private proxyService: ProxyService) {}

	public addStory(story: Story, token: String) {
		let request = new Request();
		request.setToken(token);
		request.setStory(story);

		return this.proxyService.post('story/add', request);
	}

	public editStory(story: Story, token: String) {
		let request = new Request();
		request.setToken(token);
		request.setStory(story);

		return this.proxyService.put('story/add', request);
	}

	public getStory(id: Number) {
		return this.proxyService.get('story/'+id);
	}

	public getStories(page: Number, size: Number) {
		return this.proxyService.get('story/'+page+'/'+size);
	}
}
