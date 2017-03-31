import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { ServerService } from './server.service';
import { AlertService } from './alert.service';

import { Request } from '../classes/request.class';
import { ProxyResponse } from '../classes/response.class';
import { Alert } from '../classes/alert.class';

@Injectable()
export class ProxyService {
	private options: RequestOptions;

	constructor(private http:Http,private alertService:AlertService){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		this.options = new RequestOptions({ headers: headers });
	}

	public post(url:String, request: Request): Promise<ProxyResponse> {
		let body = JSON.stringify(request);

		return this.http.post('http://localhost:8080/core/'+url, body, this.options)
			.toPromise()
			.then((data) => { return this.handleResponse(data) })
			.catch(this.handleError);
	}

	public get(url:String):Promise<ProxyResponse>{
		return this.http.get('http://localhost:8080/core/'+url)
			.toPromise()
			.then((data) => { return this.handleResponse(data) })
			.catch(this.handleError);
	}

	public put(url:String, request:Request):Promise<ProxyResponse>{
		let body = JSON.stringify(request);

		return this.http.put('http://localhost:8080/core/'+url, body, this.options)
			.toPromise()
			.then((data) => { return this.handleResponse(data) })
			.catch(this.handleError);
	}

	private handleResponse(data:Response){
		let response = new ProxyResponse(data.json());
		if (response.getMessage()!=null){
			let alert = new Alert(response.getMessage());
			this.alertService.addAlert(alert);
		}
		if(response.getSuccess()){
			return response;
		}
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}

}
