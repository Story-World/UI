import {NgModule} from '@angular/core';
import {CommonModule}  from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TranslationModule} from '../translate.module';

import {UpdateUserComponent} from './updateUser.component';
import {UserMenuComponent} from './userMenu.component';
import {ProfileComponent} from './profile.component';

import {ProxyService} from '../../services/proxy.service';
import {UserService} from '../../services/user/user.service';

const userRoutes: Routes = [
{
	path: 'user',
	children: [
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
			path: ':id',
			component: ProfileComponent
		},
	]
}
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forRoot(userRoutes), TranslationModule
	],
	declarations: [
		UpdateUserComponent, UserMenuComponent, ProfileComponent
	],
	exports: [
		UpdateUserComponent, UserMenuComponent, ProfileComponent
	],
	providers: [
		ProxyService, UserService
	]
})
export class UserModule { }
