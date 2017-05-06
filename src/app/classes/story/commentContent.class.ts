import { User } from '../user/user.class';

export class CommentContent{
	public id:String;
	public author:User;
	public content:String;
	public likes:number;
	public dislikes:number;
	public edited:boolean;

	public getContent():String{
		return this.content;
	}

	public setContent(content:String){
		this.content = content;
	}

	public getId():String{
		return this.id;
	}

}