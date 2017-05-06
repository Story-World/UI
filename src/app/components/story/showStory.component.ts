import { Component } from '@angular/core';
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
	private add: boolean;

	constructor(private userDataProvider: UserDataProvider, private commentService:CommentService, private activatedRouter: ActivatedRoute) {
		this.comments = [];
		this.pageNumber = 0;
		this.story = new Story();
		this.addCommentContent = new CommentContent();
		this.story.id = this.activatedRouter.snapshot.params['id'];
		this.commentService.getComment(this.pageNumber, 10, this.story.id).then(res => this.handleComments(res));
		this.add = true;
	}

	loadMore(){
		this.commentService.getComment(this.pageNumber, 10, this.story.id).then(res => this.handleComments(res));
	}

	addComment(){
		this.commentService.saveComment(this.userDataProvider.getToken(), this.story, this.addCommentContent).then(res => this.handleAddComment(res));
	}

	prepareEditComment(comment: CommentContent){
		this.addCommentContent = comment;
		this.add = false;
	}

	editComment(){
		this.commentService.updateComment(this.userDataProvider.getToken(), this.story, this.addCommentContent).then(res => this.handleAddComment(res));
	}

	deleteComment(comment: CommentContent){
		this.commentService.deleteComment(comment.id, this.userDataProvider.getToken()).then(res => this.handleDeleteComment(res, comment));
	}

	like(comment: CommentContent){
		if(this.userDataProvider.isLoggedIn()){
			this.commentService.likeComment(this.userDataProvider.getToken(), comment).then(res => this.handleLike(res, comment));
		}
	}

	dislike(comment: CommentContent){
		if(this.userDataProvider.isLoggedIn()){
			this.commentService.dislikeComment(this.userDataProvider.getToken(), comment).then(res => this.handleDislike(res, comment));
		}
	}

	checkAccessToComment(comment: CommentContent){
		if(this.userDataProvider.isLoggedIn()){
			if(comment.author.id == this.userDataProvider.getUser().id){
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	private handleComments(res:ProxyResponse){
		if(res) {	
			if(res.getComments().length<=10 && res.getComments().length>0) {
				this.pageNumber++;
				res.getComments().forEach(x=>this.comments.push(x));				
			}
		}
	}

	private handleLike(res:ProxyResponse, comment: CommentContent){
		if(res) {
			comment.likes = res.getComment().likes;
		}
	}

	private handleDislike(res:ProxyResponse, comment: CommentContent){
		if(res) {
			comment.dislikes = res.getComment().dislikes;
		}
	}

	private handleAddComment(res:ProxyResponse){
		if(res) {
			this.addCommentContent = new CommentContent();
			this.comments.unshift(res.getComment());
		}
	}

	private handleDeleteComment(res:ProxyResponse, comment: CommentContent){
		if(res) {
			console.log(comment.id);
			this.comments.filter(x=> x.id === comment.id);
		}
	}

}
