import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { Story } from '../../classes/story/story.class';
import { CommentContent } from '../../classes/comment/commentContent.class';


@Injectable()
export class CommentService {
	constructor(private proxyService:ProxyService) { 
	}

	getComment(page:Number, sizePage:Number, storyId:Number){
		return this.proxyService.get("comment/"+storyId+"/"+page+"/"+sizePage);
	}

	saveComment(token:String, story:Story, commentContent: CommentContent){
		let request = new Request();
		request.setToken(token);
		request.setStory(story);
		request.setCommentContent(commentContent);

		return this.proxyService.post("comment",request);
	}

	updateComment(token:String, story:Story, commentContent: CommentContent){
		let request = new Request();
		request.setToken(token);
		request.setStory(story);
		request.setCommentContent(commentContent);
		
		return this.proxyService.put("comment",request);
	}

	deleteComment(id:String, token:string){
		return this.proxyService.delete("comment/"+id, token);
	}

	likeComment(token:String, commentContent: CommentContent){		
		let request = new Request();
		request.setToken(token);
		request.setCommentContent(commentContent);

		return this.proxyService.post("comment/like", request);
	}

	dislikeComment(token:String, commentContent: CommentContent){		
		let request = new Request();
		request.setToken(token);
		request.setCommentContent(commentContent);

		return this.proxyService.post("comment/dislike", request);
	}
}