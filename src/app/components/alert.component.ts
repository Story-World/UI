import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Alert } from '../classes/alert.class';
import { AlertService } from '../services/alert.service';

@Component({
	selector: 'alert',
	templateUrl: `../app/views/alert.html`,
	styleUrls: [`../app/styles/styles.css`]
})
export class AlertComponent implements OnDestroy{
	private alert: Alert;
	private subscription: Subscription;

	constructor(private alertService:AlertService) {
		this.subscription = this.alertService.getAlerts().subscribe(alert => { this.alert = alert });
	};

	getAlert(){
		return this.alert;
	}

	delete(){
		this.alert = null;
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
