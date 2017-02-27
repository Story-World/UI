import { User } from './user/user.class';
import { ResponseMessage } from './responseMessage.class';

export class ProxyResponse {
	private token: string;
	private success: boolean;
	private message: ResponseMessage;
	private user: User;
	private users: Array<User>;

	constructor(data:any){
		this.token = data.token;
		this.success = data.success;
		this.message = data.message;
		this.user = data.user;
		this.users = data.users;
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

}