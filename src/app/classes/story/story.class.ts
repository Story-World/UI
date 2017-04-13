import { StoryType } from './storyType.enum';
import { StoryPage } from './storyPage.class';
import { StoryState } from './storyState.enum';
import { User } from '../user/user.class';

export class Story{
	private id:Number;
	private state:StoryState;
	private type:StoryType;
	private keywords:Array<String>;
	private title:String;
	private description:String;

	private author:User;

	private rawText:String;
	private pages:Array<StoryPage>;

	private rating:Number;
	private comments:Array<Comment>;

	private favourite:Boolean;
	private rate:Number;

}