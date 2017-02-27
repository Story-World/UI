import { User } from './user/user.class';

export class Request {
	private token: string;
	private user: User;
	private users: Array<User>;

	constructor()

	constructor(token?:string){
		this.token = token;
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
}