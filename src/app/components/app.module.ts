import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { StoryWorldComponent }  from './app.component';
import { UserPanelComponent } from './user/userPanel.component';
import { MenuComponent } from './menu.component';
import { MainSiteComponent } from './mainSite.component';
import { UserMenuComponent } from './user/userMenu.component';
import { FavouritePlacesComponent } from './user/favouritePlaces.component';

import { UserDataProvider } from '../services/userDataProvider.service';
import { ServerService } from '../services/server.service';

const appRoutes: Routes = [
{ 
	path: '',
	component: MainSiteComponent
},
{
	path: 'panel',
	component: UserMenuComponent
}
];


@NgModule({
	imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
	declarations: [ StoryWorldComponent, UserPanelComponent, MenuComponent, MainSiteComponent, UserMenuComponent, 
					FavouritePlacesComponent ],
	providers: [UserDataProvider, ServerService],
	bootstrap:    [ StoryWorldComponent ]
})
export class StoryWorldModule { }
