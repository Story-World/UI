import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { Story } from '../../classes/story/story.class';
import { CommentContent } from '../../classes/comment/commentContent.class';
import { ProxyResponse } from '../../classes/response.class';

import { UserDataProvider } from '../../services/userDataProvider.service';
import { CommentService } from '../../services/comment/comment.service';

@Component({
	selector: 'comment',
	templateUrl: `../app/views/comment/comment.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [CommentService],
	encapsulation: ViewEncapsulation.None
})

export class CommentComponent implements OnInit {
	private story: Story = new Story();
	private addCommentContent: CommentContent = new CommentContent();
	private comments: Array<CommentContent> = [];
	private pageNumber: number = 0;
	private add: boolean = true;
	@Input() id: Number;

	constructor(private userDataProvider: UserDataProvider, private commentService:CommentService) {
	}

	ngOnInit(){
		this.story.id = this.id;
		this.commentService.getComment(this.pageNumber, 10, this.story.id).then(res => this.handleComments(res));
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
				if(this.comments.length % 10 == 0 && this.comments.length != 0){					
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
			comment.dislikes = res.getComment().dislikes;
		}
	}

	private handleDislike(res:ProxyResponse, comment: CommentContent){
		if(res) {
			comment.likes = res.getComment().likes;
			comment.dislikes = res.getComment().dislikes;
		}
	}

	private handleAddComment(res:ProxyResponse){
		if(res) {
			this.removeOldComment(this.addCommentContent);
			this.addCommentContent = new CommentContent();
			this.comments.unshift(res.getComment());
		} else {
			this.addCommentContent = new CommentContent();
			this.add = true;
		}
	}

	private handleDeleteComment(res:ProxyResponse, comment: CommentContent){
		if(res) {
			this.addCommentContent = new CommentContent();
			this.removeOldComment(comment);
			this.add = true;
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
