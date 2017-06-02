import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

import { TranslationModule } from '../translate.module'; 

import { AddStoryComp } from './addStory.comp';

const storyRoutes: Routes = [
	{
		path: 'story',
		children: [
		{
			path: '',
			component: AddStoryComp
		}
		]
	}
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forRoot(storyRoutes), TranslationModule
	],
	declarations: [
		AddStoryComp
	],
	exports: [
		AddStoryComp
	]
})
export class StoryModule { }
