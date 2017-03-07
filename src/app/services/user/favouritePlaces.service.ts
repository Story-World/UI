import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { UserDataProvider } from '../userDataProvider.service';
import { ProxyService } from '../proxy.service';
import { ServerService } from '../server.service';
import { AlertService } from '../alert.service';

import { Request } from '../../classes/request.class';
import { FavouritePlace } from '../../classes/user/favouritePlace.class';
import { Alert } from '../../classes/alert.class';

@Injectable()
export class FavouritePlacesService {
	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(private proxyService: ProxyService, private userDataProvider: UserDataProvider, private serverService: ServerService, private alertService: AlertService) {
	}

	getFavouritePlaces() {
		let request = new Request();
		request.setToken(this.userDataProvider.getToken());
		return this.proxyService.post("userInterface/favouritePlaces", request);
	}

}