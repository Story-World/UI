import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../classes/user/user.class';
import { ProxyResponse } from '../../classes/response.class';
import { Story } from '../../classes/story/story.class';
import { CommentContent } from '../../classes/comment/commentContent.class';

import { UserService } from '../../services/common/userService.service';

@Component({
	selector: 'profile',
	templateUrl: `../app/views/user/profile.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [UserService],
	encapsulation: ViewEncapsulation.None
})

export class ProfileComponent implements OnInit {
	private id: number;
	private comments: Array<CommentContent> = [];
	private stories: Array<Story> = [];
	private user: User = new User();

	constructor(private router: ActivatedRoute, private userService: UserService, private activatedRouter: ActivatedRoute) {
	}

	ngOnInit(){		
		this.id = this.activatedRouter.snapshot.params['id'];
		this.userService.get(this.id).then(res => this.handleUser(res)); 
	}

	handleUser(res: ProxyResponse){
		if(res){
			this.comments = res.getComments();
			this.stories = res.getStories();
			this.user = res.getUser();
		}
	}

}