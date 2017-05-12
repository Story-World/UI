import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../classes/story/story.class';
import { CommentContent } from '../../classes/story/commentContent.class';
import { StoryType } from '../../classes/story/storyType.enum';

import { StoryService } from '../../services/story/story.service';
import { CommentService } from '../../services/comment/comment.service';

import { ProxyResponse } from '../../classes/response.class';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
	selector: 'showStory',
	templateUrl: `../app/views/story/showStory.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [StoryService,CommentService],
	encapsulation: ViewEncapsulation.None
})

export class ShowStoryComponent {
	private story: Story;
	private addCommentContent: CommentContent = new CommentContent();
	private comments: Array<CommentContent> = [];
	private pageNumber: number = 0;
	private add: boolean = true;

	constructor(private userDataProvider: UserDataProvider, private storyService:StoryService, private commentService:CommentService, private activatedRouter: ActivatedRoute) {
		this.story = new Story;
		console.log(this.story);
		storyService.getStory(this.activatedRouter.snapshot.params['id']).then(res => this.handleGetStory(res));		
	}

	private handleGetStory(res:ProxyResponse){
		if(res){
			this.story = res.getStory();
			var date = new Date(this.story.date.year, this.story.date.monthValue, this.story.date.dayOfMonth);
			this.story.creationDate = date;
			this.commentService.getComment(this.pageNumber, 10, this.story.id).then(res => this.handleComments(res));
		}
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
			if(comment.author.id == this.userDataProvider.getUser().id || this.userDataProvider.hasRole(2)){
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
			if(this.comments.length == 0) {
				res.getComments().forEach(x=>this.comments.push(x));
				if(this.comments.length % 10 == 0){
					this.pageNumber++;
				}				
			} else if(res.getComments().length > (this.comments.length % 10)) {
				for(var i=this.comments.length % 10; i<res.getComments().length; i++){
					this.comments.push(res.getComments()[i]);
				}
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
			this.removeOldComment(this.addCommentContent);
			this.addCommentContent = res.getComment();
			this.comments.unshift(res.getComment());
		} else {
			this.addCommentContent = new CommentContent();
			this.add = true;
		}
	}

	private handleDeleteComment(res:ProxyResponse, comment: CommentContent){
		if(res) {
			this.removeOldComment(comment);
		}
	}

	private removeOldComment(comment: CommentContent){
		for(let entry of this.comments){
			if(entry.id == comment.id){
				var index = this.comments.indexOf(entry, 0); 
				this.comments.splice(index, 1);
				break;
			}
		}
	}

}
