import { Injectable } from '@angular/core';

import { ProxyService } from '../proxy.service';

import { Request } from '../../classes/request.class';
import { User } from '../../classes/user/user.class';
import { Token } from '../../classes/user/token.enum';

@Injectable()
export class TokenService {
	constructor(private proxyService:ProxyService) { 
	}

	confirmPass(user:User, tokenType:Token, token:String){
		let request = new Request();
		request.setUser(user);
		request.setToken(token);
		request.setTokenType(tokenType);
		console.log(request);
		return this.proxyService.post("user/confirmPass",request);
	}
}