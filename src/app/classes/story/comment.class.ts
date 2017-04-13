import { User } from '../user/user.class';

export class Comment{
	private id:Number;
	private author:User;
	private text:String;
	private likes:Number;
	private dislikes:Number;
}