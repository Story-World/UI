import {NgModule} from '@angular/core';
import {CommonModule}  from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule}   from '@angular/forms';

import {TranslationModule} from '../translate.module';

import {StoryListComponent} from './storyList.component';
import {AddStoryComponent} from './addStory.component';
import {ShowStoryComponent} from './showStory.component';
import {EditStoryComponent} from './editStory.component';
import {StoryService} from '../../services/story/story.service';

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
		CommonModule, RouterModule.forRoot(storyRoutes), TranslationModule, FormsModule
	],
	declarations: [
		StoryListComponent, AddStoryComponent, ShowStoryComponent, EditStoryComponent
	],
	exports: [
		StoryListComponent, AddStoryComponent, ShowStoryComponent, EditStoryComponent
	],
	providers: [StoryService]
})
export class StoryModule { }
