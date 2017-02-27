import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { StoryWorldComponent }  from './app.component';
import { UserPanelComponent } from './user/userPanel.component';
import { MenuComponent } from './menu.component';
import { MainSiteComponent } from './mainSite.component';
import { UserMenuComponent } from './user/userMenu.component';
import { FavouritePlacesComponent } from './user/favouritePlaces.component';
import { LoginRegisterComponent } from './user/loginRegister.component';
import { AlertComponent } from './alert.component';

import { UserDataProvider } from '../services/userDataProvider.service';
import { ServerService } from '../services/server.service';
import { AlertService } from '../services/alert.service';
import { ProxyService } from '../services/proxy.service';

const appRoutes: Routes = [
{ 
	path: '',
	component: MainSiteComponent
},
{
	path: 'login',
	component: LoginRegisterComponent
},
{
	path: 'register',
	redirectTo: 'login'
}
];


@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
	declarations: [ StoryWorldComponent, AlertComponent, UserPanelComponent, MenuComponent, MainSiteComponent, UserMenuComponent, 
					FavouritePlacesComponent, LoginRegisterComponent ],
	providers: [UserDataProvider, ServerService, AlertService, ProxyService],
	bootstrap:    [ StoryWorldComponent ]
})
export class StoryWorldModule { }
