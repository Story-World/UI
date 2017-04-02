import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { User } from '../../classes/user/user.class';

@Injectable()
export class UpdateUserService {
	constructor(private proxyService:ProxyService) { 
	}

	updateUser(user:User, token:String){
		let request = new Request();
		request.setUser(user);
		request.setToken(token);

		return this.proxyService.put("user/updateUser",request);
	}

	changePassword(user:User, token:String){
		let request = new Request();
		request.setUser(user);
		request.setToken(token);

		return this.proxyService.put("user/changePassword",request);
	}
}