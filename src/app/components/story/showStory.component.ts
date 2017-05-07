import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../classes/story/story.class';
import { ProxyResponse } from '../../classes/response.class';
import { StoryType } from '../../classes/story/storyType.enum';

import { UserDataProvider } from '../../services/userDataProvider.service';


@Component({
	selector: 'showStory',
	templateUrl: `../app/views/story/showStory.html`,
	styleUrls: [`../app/styles/styles.css`],
	encapsulation: ViewEncapsulation.None
})

export class ShowStoryComponent {
	@Input() id:Number;
	private story: Story;

	constructor(private userDataProvider: UserDataProvider, private activatedRouter: ActivatedRoute) {
		this.story = new Story();
		this.story.id = this.activatedRouter.snapshot.params['id'];
	}

}
