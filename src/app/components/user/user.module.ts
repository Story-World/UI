import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TranslationModule } from '../translate.module'; 

import { UpdateUserComp } from './updateUser.comp';

const userRoutes: Routes = [
	{
		path: 'user',
		children: [
		{
			path: 'edit',
			component: UpdateUserComp
		}
		]
	}
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forRoot(userRoutes), TranslationModule
	],
	declarations: [
		UpdateUserComp
	],
	exports: [
		UpdateUserComp
	]
})
export class UserModule { }
