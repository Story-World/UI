import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { User } from '../../classes/user/user.class';

@Injectable()
export class UpdateUserService {
	constructor(private proxyService:ProxyService) { 
	}

	getUser(user:User, token:String){
		let request = new Request();
		request.setUser(user);
		request.setToken(token);

		return this.proxyService.post("user/getUser",request);
	}

	updateUser(user:User, token:String){
		let request = new Request();
		request.setUser(user);
		request.setToken(token);

		return this.proxyService.post("user/updateUser",request);
	}

	changePassword(user:User, token:String){
		let request = new Request();
		request.setUser(user);
		request.setToken(token);

		return this.proxyService.post("user/changePassword",request);
	}
}