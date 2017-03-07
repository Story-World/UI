import { Component } from '@angular/core';
import { FavouritePlace } from '../../classes/user/favouritePlace.class';
import { ServerService } from '../../services/server.service';
import { Router } from '@angular/router';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
	selector: 'mainSiteEditor',
	templateUrl: `../app/views/user/mainSiteEditor.html`,
	styleUrls: [`../app/styles/styles.css`]
})
export class MainSiteEditorComponent {
	constructor(){
		console.log("MAIN SITE!");
	}
}