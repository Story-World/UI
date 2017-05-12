import { StoryType } from './storyType.enum';
import { StoryPage } from './storyPage.class';
import { StoryState } from './storyState.enum';
import { User } from '../user/user.class';

export class Story{
	id:Number;
	state:StoryState;
	type:StoryType;
	// keywords:Array<String>;
	title:String;
	description:String;
	date:any;
	creationDate: Date;

	author:User;

	rawText:String;
	pages:Array<StoryPage>;

	// rating:Number;

	// favourite:Boolean;
	// rate:Number;

	constructor(){
		this.author = new User;
	}

}