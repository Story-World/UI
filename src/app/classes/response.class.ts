import { User } from './user/user.class';
import { ResponseMessage } from './responseMessage.class';
import { FavouritePlace } from './user/favouritePlace.class';
import { CommentContent } from './comment/commentContent.class';
import { Story } from './story/story.class';

export class ProxyResponse {
	private token: string;
	private success: boolean;
	private message: ResponseMessage;
	private user: User;
	private users: Array<User>;
	private favouritePlaces: Array<FavouritePlace>;
	private comments: Array<CommentContent>;
	private comment: CommentContent;
	private story: Story;
	private stories: Array<Story>;

	constructor(data:any){
		this.token = data.token;
		this.success = data.success;
		this.message = data.message;
		this.user = data.user;
		this.users = data.users;
		this.favouritePlaces = data.favouritePlaces;
		this.comments = data.comments;
		this.comment = data.comment;
		this.story = data.story;
		this.stories = data.stories;
	}

	public getToken(){
		return this.token;
	}

	public getSuccess(){
		return this.success;
	}

	public getMessage(){
		return this.message;
	}

	public getUser() {
		return this.user;
	}

	public getUsers() {
		return this.users;
	}

	public getFavouritePlaces(){
		return this.favouritePlaces;
	}

	public getComments(){
		return this.comments;
	}

	public getComment(){
		return this.comment;
	}

	public getStory(){
		return this.story;
	}

	public getStories(){
		return this.stories;
	}

}