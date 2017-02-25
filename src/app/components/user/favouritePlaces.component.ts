import { Component } from '@angular/core';
import { FavouritePlace } from '../../classes/favouritePlace.class';
import { ServerService } from '../../services/server.service';
import { Router } from '@angular/router';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
  selector: 'favouritePlaces',
  templateUrl: `../app/views/user/favouritePlaces.html`,
  styleUrls: [`../app/styles/styles.css`,`../app/styles/hover.css`]
})
export class FavouritePlacesComponent  { 
	public favouritePlaceList: Array<FavouritePlace>;

	constructor(private serverService: ServerService, private router: Router, private userDataProvider:UserDataProvider) {
		this.favouritePlaceList = new Array<FavouritePlace>();
		this.favouritePlaceList.push(new FavouritePlace("TESTTEST","fa-user", "/panel"));
		this.favouritePlaceList.push(new FavouritePlace("WRUMWRUM", "fa-car", "/story/add"));
	}

	redirect(favouritePlace:FavouritePlace){
		this.router.navigateByUrl(favouritePlace.url);
	}

	public calculateHeight() {
		if (!this.userDataProvider.isMobile()) {
			return "100vh";
		}
		return "";
	}
	
 }