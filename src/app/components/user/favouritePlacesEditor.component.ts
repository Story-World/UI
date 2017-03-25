import { Component } from '@angular/core';
import { FavouritePlace } from '../../classes/user/favouritePlace.class';
import { ServerService } from '../../services/server.service';
import { Router } from '@angular/router';
import { UserDataProvider } from '../../services/userDataProvider.service';

@Component({
	selector: 'favouritePlacesEditor',
	templateUrl: `../app/views/user/favouritePlacesEditor.html`,
	styleUrls: [`../app/styles/styles.css`]
})
export class FavouritePlacesEditorComponent {
	private modal:boolean;
	private types:Array<String>;
	private facets:Array<String>;
	favouritePlaces:Array<FavouritePlace>;
	favouritePlace:FavouritePlace;
	
	constructor(){
		this.types = new Array<String>("USER");
		this.facets = this.prepareFacets();
		this.favouritePlaces = new Array<FavouritePlace>();
		this.favouritePlace = new FavouritePlace();
		this.modal=false;
	}

	saveFavouritePlace(favouritePlace:FavouritePlace){
		this.favouritePlaces.push(favouritePlace);
		this.favouritePlace = new FavouritePlace();
		console.log(this.favouritePlaces);
	}

	setFacet(facet:String){
		this.favouritePlace.facet = facet;
	}

	checkFacet(facet:String){
		return this.favouritePlace.facet===facet;
	}

	private prepareFacets(){
		let facets = new Array<String>();
		facets.push("fa-user");
		facets.push("fa-car");
		facets.push("fa-users");

		return facets;
	}
}