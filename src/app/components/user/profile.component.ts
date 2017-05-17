import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../classes/user/user.class';
import { ProxyResponse } from '../../classes/response.class';
import { Story } from '../../classes/story/story.class';
import { CommentContent } from '../../classes/comment/commentContent.class';

import { UserDataProvider } from '../../services/userDataProvider.service';
import { UserService } from '../../services/common/userService.service';
import { CommentService } from '../../services/comment/comment.service';

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
	private accessUser: boolean = false;
	private edit: boolean = false;
	private editCommentContent: CommentContent = new CommentContent();
	private story: Story = new Story();

	constructor(private commentService:CommentService, private userDataProvider: UserDataProvider, private router: ActivatedRoute, private userService: UserService, private activatedRouter: ActivatedRoute) {
	}

	ngOnInit(){		
		this.id = this.activatedRouter.snapshot.params['id'];
		this.userService.get(this.id).then(res => this.handleUser(res)); 
	}

	handleUser(res: ProxyResponse){
		if(res) {
			this.comments = res.getComments();
			this.stories = res.getStories();
			this.user = res.getUser();
			if(this.userDataProvider.getUser().id == this.user.id){
				this.accessUser = true;
			}
		}
	}

	prepareEditComment(commentContent: CommentContent){
		if(this.edit) {
			this.edit = false;
		} else {
			this.edit = true;
			this.editCommentContent = commentContent;
		}		
	}

	editComment(){
		this.story.id = this.editCommentContent.storyId;
		this.commentService.updateComment(this.userDataProvider.getToken(), this.story, this.editCommentContent);
		this.edit = false;
	}

}