import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Alert } from '../classes/alert.class';

@Injectable()
export class AlertService {
	
	private alert = new Subject<Alert>();

	public addAlert(alert: Alert) {
		this.alert.next(alert);
	}

	public getAlerts(): Observable<Alert> {
		return this.alert.asObservable();
	}

}
