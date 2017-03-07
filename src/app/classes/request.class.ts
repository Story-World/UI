import { User } from './user/user.class';
import { FavouritePlace } from './user/favouritePlace.class';

export class Request {
	private token: String;
	private user: User;
	private users: Array<User>;
	private favouritePlaces: Array<FavouritePlace>;

	constructor()

	constructor(token?:String){
		this.token = token;
	}

	public setToken(token:String){
		this.token = token;
	}

	public getToken(){
		return this.token;
	}

	public setUser(user:User){
		this.user = user;
	}

	public getUser(){
		return this.user;
	}

	public setUsers(users:Array<User>){
		this.users = users;
	}

	public getUsers(){
		return this.users;
	}

	public setFavouritePlaces(favouritePlaces:Array<FavouritePlace>){
		this.favouritePlaces = favouritePlaces;
	}

	public getFavouritePlaces(){
		return this.favouritePlaces;
	}
}