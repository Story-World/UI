import { Component } from '@angular/core';
import { FavouritePlace } from '../../classes/user/favouritePlace.class';
import { ServerService } from '../../services/server.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UserDataProvider } from '../../services/userDataProvider.service';
import { FavouritePlacesService } from '../../services/user/favouritePlaces.service';

@Component({
  selector: 'favouritePlaces',
  templateUrl: `../app/views/user/favouritePlaces.html`,
  styleUrls: [`../app/styles/styles.css`, `../app/styles/hover.css`],
  providers: [FavouritePlacesService]
})
export class FavouritePlacesComponent  { 
	public favouritePlaceList: Array<FavouritePlace>;
	private subscription: Subscription;
	private logged: boolean;

	constructor(private serverService: ServerService, private router: Router, private userDataProvider: UserDataProvider, private favouritePlacesService: FavouritePlacesService) {
		this.favouritePlaceList = new Array<FavouritePlace>();
		this.logged = this.userDataProvider.isLoggedIn();
		if(this.isLoggedIn()){
			this.getFavouritePlaces();
		}
		this.subscription = this.userDataProvider.isLogged().subscribe(logged => { this.logged = logged; if(logged)this.getFavouritePlaces() });
	}

	redirect(favouritePlace:FavouritePlace){
		this.router.navigateByUrl(favouritePlace.url);
	}

	public showHidePanel(){
		this.userDataProvider.showHideLeftPanel();
	}

	public isLoggedIn(){
		return this.logged;
	}

	public calculateHeight() {
		if (!this.userDataProvider.isMobile()) {
			return "100vh";
		}
		return "";
	}

	public calculateWidth(){
		if(this.userDataProvider.isShowLeftPanel()){
			if (!this.userDataProvider.isMobile()) {
				return this.userDataProvider.calculateFavouritePlacesOnWidth() + "px";
			}
			return "100vw";
		}else{
			return this.userDataProvider.calculateFavouritePlacesOffWidth() + "px";
		}
	}

	public calculateTop() {
		if (!this.userDataProvider.isMobile()) {
			return "50px";
		}
		return "200px";
	}

	public isShowLeftPanel() {
		return this.userDataProvider.isShowLeftPanel();
	}

	private getFavouritePlaces() {
		this.favouritePlacesService.getFavouritePlaces().then(res => this.favouritePlaceList = res.getFavouritePlaces());
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
	
 }