import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { User } from '../../classes/user/user.class';

@Injectable()
export class LoginRegisterService {
	constructor(private proxyService:ProxyService) { 
	}

	login(user:User){
		let request = new Request();
		request.setUser(user);

		return this.proxyService.post("user/login",request);
	}

	register(user:User){
		let request = new Request();
		request.setUser(user);

		return this.proxyService.post(request);
	}
}