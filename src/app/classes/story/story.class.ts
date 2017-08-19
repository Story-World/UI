import { StoryType } from './storyType.enum';
import { User } from '../user/user.class';

export class Story{

	id: Number;

	type: StoryType;

	name: String;

	description: String;

	date: any;

	creationDate: Date;

	author: User;

	rawText: String;

	avgRate: number;

	constructor(){
		this.author = new User;
	}

}
