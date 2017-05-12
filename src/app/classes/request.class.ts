import { User } from './user/user.class';
import { FavouritePlace } from './user/favouritePlace.class';
import { TokenType } from './user/token.enum';
import { Story } from './story/story.class';
import { CommentContent } from './comment/commentContent.class';

export class Request {
	private token: String;
	private user: User;
	private users: Array<User>;
	private favouritePlaces: Array<FavouritePlace>;
	private tokenType: TokenType;
	private story: Story;
	private stories: Array<Story>;
	private page: Number;
	private sizePage: Number;
	private commentContent: CommentContent;

	constructor()

	constructor(token?:String){
		this.token = token;
	}

	public setToken(token:String){
		this.token = token;
	}

	public getToken():String{
		return this.token;
	}

	public setUser(user:User){
		this.user = user;
	}

	public getUser():User{
		return this.user;
	}

	public setUsers(users:Array<User>){
		this.users = users;
	}

	public getUsers():Array<User>{
		return this.users;
	}

	public setFavouritePlaces(favouritePlaces:Array<FavouritePlace>){
		this.favouritePlaces = favouritePlaces;
	}

	public getFavouritePlaces():Array<FavouritePlace>{
		return this.favouritePlaces;
	}

	public setTokenType(tokenType:TokenType){
		this.tokenType = tokenType;
	}

	public getTokenType():TokenType{
		return this.tokenType;
	}

	public setStory(story:Story){
		this.story=story;
	}

	public getStory():Story{
		return this.story;
	}

	public getStories():Array<Story>{
		return this.stories;
	}

	public setPage(page:Number){
		this.page = page;
	}

	public getPage():Number{
		return this.page;
	}

	public setSizePage(sizePage:Number){
		this.sizePage = sizePage;
	}

	public getSizePage():Number{
		return this.sizePage;
	}

	public setCommentContent(commentContent:CommentContent){
		this.commentContent = commentContent;
	}

	public getCommentContent():CommentContent{
		return this.commentContent;
	}
}