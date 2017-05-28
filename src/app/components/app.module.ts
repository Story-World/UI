import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/primeng';

import { StoryWorldComponent }  from './app.component';
import { UserPanelComponent } from './user/userPanel.component';
import { MenuComponent } from './menu.component';
import { MainSiteComponent } from './mainSite.component';
import { UserMenuComponent } from './user/userMenu.component';
import { UserListComponent } from './user/userList.component';
import { FavouritePlacesComponent } from './user/favouritePlaces.component';
import { LoginRegisterComponent } from './user/loginRegister.component';
import { AlertComponent } from './alert.component';
import { InterfaceEditorComponent } from './user/interfaceEditor.component';
import { FavouritePlacesEditorComponent } from './user/favouritePlacesEditor.component';
import { MainSiteEditorComponent } from './user/mainSiteEditor.component';
import { TokenComponent } from '../components/user/token.component';
import { ProfileComponent } from '../components/user/profile.component';
import { UpdateUserComponent } from '../components/user/updateUser.component';
import { ForbiddenComponent } from '../components/forbidden.component';

import { AddStoryComponent } from '../components/story/addStory.component';
import { ShowStoryComponent } from '../components/story/showStory.component';
import { StoryListComponent } from '../components/story/storyList.component';
import { CommentComponent } from '../components/comment/comment.component';

import { ModalComponent } from './common/modal/modal.component';
import { UserSelectorComponent } from './common/userSelector.component';

import { UserDataProvider } from '../services/userDataProvider.service';
import { ServerService } from '../services/server.service';
import { AlertService } from '../services/alert.service';
import { ProxyService } from '../services/proxy.service';
import { CommentService } from '../services/comment/comment.service';

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
},
{
	path: 'user',
	children: [		
		{
			path: 'interface',
			component: InterfaceEditorComponent
		},
		{
			path: 'edit/:id',
			component: UpdateUserComponent
		},
		{
			path: 'edit',
			component: UpdateUserComponent
		},
		{
			path: 'menu',
			component: UserMenuComponent
		},
		{
			path: 'list',
			component: UserListComponent
		},
		{
			path: ':id',
			component: ProfileComponent
		},
	]
},
{
	path: 'token/:type/:userId/:token',
	component: TokenComponent
},
{
	path: 'forbidden',
	component: ForbiddenComponent
},
{
	path: 'story',
	children: [
		{
			path: '',
			component: StoryListComponent
		},
		{
			path: 'add',
			component: AddStoryComponent
		},
		{
			path: ':id',
			component: ShowStoryComponent
		},
	]
}
];


@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), DataTableModule],
	declarations: [ StoryWorldComponent, AlertComponent, ModalComponent, UserSelectorComponent, UserPanelComponent, 
					MenuComponent, MainSiteComponent, UserMenuComponent, FavouritePlacesComponent, LoginRegisterComponent,
					InterfaceEditorComponent, FavouritePlacesEditorComponent, MainSiteEditorComponent, TokenComponent,
					UpdateUserComponent, ForbiddenComponent, ShowStoryComponent, AddStoryComponent, StoryListComponent, 
					CommentComponent, ProfileComponent, UserListComponent
					],
	providers: [UserDataProvider, ServerService, AlertService, ProxyService, CommentService],
	bootstrap: [ StoryWorldComponent ]
})
export class StoryWorldModule { }
