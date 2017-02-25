import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { ServerService } from '../server.service';
import { AlertService } from '../alert.service';

import { Request } from '../../classes/request.class';
import { User } from '../../classes/user.class';
import { Alert } from '../../classes/alert.class';

@Injectable()
export class LoginRegisterService {
	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(private http: Http, private serverService:ServerService, private alertService:AlertService) { 
	}

	login(user:User):Promise<void>{
		let options = new RequestOptions({ headers: this.headers });

		let request = new Request();
		request.setUser(user);

		let body = JSON.stringify(request);
		this.alertService.addAlert(new Alert(404, "Not Found"))
		return this.http.post('http://localhost:8080/core/user/login', body, options)
			.toPromise()
			.then((response) => console.log(response))
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || {};
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

}