import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../classes/story/story.class';
import { CommentContent } from '../../classes/story/commentContent.class';
import { StoryType } from '../../classes/story/storyType.enum';
import { CommentService } from '../../services/comment/comment.service';

import { ProxyResponse } from '../../classes/response.class';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
	selector: 'showStory',
	templateUrl: `../app/views/story/showStory.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [CommentService]
})

export class ShowStoryComponent {
	private story: Story;
	private addCommentContent: CommentContent;
	private comments: Array<CommentContent>;
	private pageNumber: number;

	constructor(private userDataProvider: UserDataProvider, private commentService:CommentService, private activatedRouter: ActivatedRoute) {
		this.pageNumber = 0;
		this.story = new Story();
		this.addCommentContent = new CommentContent();
		this.story.id = this.activatedRouter.snapshot.params['id'];
		console.log(this.story);
		this.commentService.getComment(this.pageNumber, 10, this.story.id).then(res => this.handleComments(res));
	}

	handleComments(res:ProxyResponse){
		if(res){
			console.log("test");
			this.comments = res.getComments();
			this.comments.forEach(x=>console.log(x));
		}
	}

	like(comment: CommentContent){
		console.log(comment.id);
		comment.likes++;
		this.commentService.likeComment(this.userDataProvider.getToken(), comment).then(res => this.handleLike(res));
	}

	dislike(comment: CommentContent){
		console.log(comment.id);
		comment.dislikes++;
		this.commentService.dislikeComment(this.userDataProvider.getToken(), comment).then(res => this.handleDislike(res));
	}

	handleLike(res:ProxyResponse){
		if(res){
			console.log(res);
		}
	}

	handleDislike(res:ProxyResponse){
		if(res){
			console.log(res);
		}
	}

	loadMore(){
		this.pageNumber++;
		this.commentService.getComment(this.pageNumber, 10, this.story.id).then(res => this.handleComments(res));
		console.log(this.pageNumber);
	}

	addComment(){
		console.log(this.addCommentContent)
		this.commentService.saveComment(this.userDataProvider.getToken(), this.story, this.addCommentContent);
	}

}
