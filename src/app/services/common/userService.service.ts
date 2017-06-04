import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { User } from '../../classes/user/user.class';

@Injectable()
export class UserService {
	constructor(private proxyService:ProxyService) { 
	}

	getUsers(token: String, page:Number, sizePage:Number){
		let request = new Request();
		request.setToken(token);
		request.setPage(page);
		request.setSizePage(sizePage);
		return this.proxyService.post("user/getUsers/",request);
	}

	getUser(user:User, token:String){
		let request = new Request();
		request.setUser(user);
		request.setToken(token);

		return this.proxyService.post("user/getUser",request);
	}

	get(id:number){
		return this.proxyService.get("user/"+id);
	}

	logOut(token:String){
		let request = new Request();
		request.setToken(token);

		return this.proxyService.post("user/logout",request);
	}

	setBlock(token:String, user:User, block:boolean){
		let request = new Request();
		request.setToken(token);
		request.setUser(user);
		request.setBlock(block);
		return this.proxyService.put("user/block",request);
	}
}