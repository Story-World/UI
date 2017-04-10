import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Alert } from '../classes/alert.class';
import { AlertService } from '../services/alert.service';
import { UserDataProvider } from '../services/userDataProvider.service';
import { AlertStatus } from '../classes/alertStatus.enum';

import { UserService } from '../services/common/userService.service';

@Component({
	selector: 'forbidden',
	templateUrl: `../app/views/forbidden.html`,
	styleUrls: [`../app/styles/styles.css`],
	providers: [UserService]
})
export class ForbiddenComponent{
	private alert:Alert;

	constructor(private alertService:AlertService, private userDataProvider: UserDataProvider, private userService:UserService) {
		if(this.userDataProvider.isLoggedIn()){
			// this.alert = new Alert();
			// this.alert.setStatus(AlertStatus.ERROR);
			// this.alert.setMessage('FORB_LOG_OUT');
			// this.alertService.addAlert(this.alert);
			this.userService.logOut(this.userDataProvider.getToken());
			this.userDataProvider.logOut();
		}
	};


}
