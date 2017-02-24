import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ServerService {
	private serverUrl: string

	constructor(){
		this.serverUrl = "localhost:8000";
	}

	public getServerUrl(){
		return this.serverUrl;
	}
}