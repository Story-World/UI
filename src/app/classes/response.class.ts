import { User } from './user/user.class';
import { ResponseMessage } from './responseMessage.class';
import { FavouritePlace } from './user/favouritePlace.class';

export class ProxyResponse {
	private token: string;
	private success: boolean;
	private message: ResponseMessage;
	private user: User;
	private users: Array<User>;
	private favouritePlaces: Array<FavouritePlace>;

	constructor(data:any){
		this.token = data.token;
		this.success = data.success;
		this.message = data.message;
		this.user = data.user;
		this.users = data.users;
		this.favouritePlaces = data.favouritePlaces;
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

}