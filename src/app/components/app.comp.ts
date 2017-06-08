import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

import {UserService} from '../services/user/user.service';

@Component({
	selector: 'storyWorld',
	templateUrl: './app.comp.html',
	styleUrls: ['../styles/styles.scss']
})

export class AppComp {
	
	constructor(private translateService: TranslateService, private userService: UserService) {
		translateService.setDefaultLang('en');
		translateService.use('en');
		this.userService.get(1);
	}

	changeLang(langCode: string) {
		this.translateService.use(langCode);
	}

}
