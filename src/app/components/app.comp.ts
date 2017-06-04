import {Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
	selector: 'storyWorld',
	templateUrl: './app.comp.html',
	styleUrls: ['../styles/styles.scss']
})
export class AppComp {
	constructor (private translateService:TranslateService) {
		translateService.setDefaultLang('en');
		translateService.use('en');
	}

	changeLang (langCode:string) {
		this.translateService.use(langCode);
	}
}
