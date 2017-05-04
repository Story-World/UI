import { User } from '../user/user.class';

export class CommentContent{
	public id:String;
	private author:User;
	private content:String;
	public likes:number;
	public dislikes:number;

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