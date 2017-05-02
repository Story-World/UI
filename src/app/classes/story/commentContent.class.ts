import { User } from '../user/user.class';

export class CommentContent{
	private id:Number;
	private author:User;
	private content:String;
	private likes:Number;
	private dislikes:Number;

	public getContent():String{
		return this.content;
	}

	public setContent(content:String){
		this.content = content;
	}
}