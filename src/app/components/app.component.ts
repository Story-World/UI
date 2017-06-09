import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

import {UserService} from '../services/user/user.service';

@Component({
	selector: 'storyWorld',
	templateUrl: './app.component.html',
	styleUrls: ['../styles/styles.scss']
})

export class AppComponent {

	constructor(private translateService: TranslateService, private userService: UserService) {
		translateService.setDefaultLang('en');
		translateService.use(translateService.getBrowserLang());
		this.userService.get(1);
	}

	changeLang(langCode: string) {
		console.log(langCode);
		this.translateService.use(langCode);
	}

}
