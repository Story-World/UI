import {NgModule} from '@angular/core';
import {CommonModule}  from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TranslationModule} from '../translate.module';

import {StoryListComponent} from './storyList.component';
import {AddStoryComponent} from './addStory.component';
import {ShowStoryComponent} from './showStory.component';
import {EditStoryComponent} from './editStory.component';

const storyRoutes: Routes = [
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
		{
			path: 'edit/:id',
			component: EditStoryComponent
		}
	]
}
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forRoot(storyRoutes), TranslationModule
	],
	declarations: [
		StoryListComponent, AddStoryComponent, ShowStoryComponent, EditStoryComponent
	],
	exports: [
		StoryListComponent, AddStoryComponent, ShowStoryComponent, EditStoryComponent
	]
})
export class StoryModule { }
