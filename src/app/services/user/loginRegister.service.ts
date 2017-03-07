import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { ProxyService } from '../proxy.service';
import { ServerService } from '../server.service';
import { AlertService } from '../alert.service';

import { Request } from '../../classes/request.class';
import { User } from '../../classes/user/user.class';
import { Alert } from '../../classes/alert.class';

@Injectable()
export class LoginRegisterService {
	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(private proxyService:ProxyService,private http: Http, private serverService: ServerService, private alertService: AlertService) { 
	}

	login(user:User){
		let request = new Request();
		request.setUser(user);

		return this.proxyService.post(request);
	}

	register(user:User){
		let request = new Request();
		request.setUser(user);

		return this.proxyService.post(request);
	}
}