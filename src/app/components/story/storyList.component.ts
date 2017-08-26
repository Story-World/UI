import {Component, OnInit} from '@angular/core';

import {Story} from '../../classes/story/story.class';
import {StoryType} from '../../classes/story/storyType.enum';

import {StoryService} from '../../services/story/story.service';

import {ProxyResponse} from '../../classes/response.class';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

@Component({
	selector: 'storyList',
	templateUrl: './storyList.component.html',
	styleUrls: ['../../styles/styles.scss']
})
export class StoryListComponent implements OnInit {

	private stories: Array<Story> = new Array<Story>();
	private size: number;
	private text: string;
	private filters: boolean;
	private sizes: Array<Number> = new Array<Number>();
	private page: number = 1;
	private numberOfPages: number;
	private elementOfPages: Array<Number> = new Array<Number>();
	private optionsModel: number[];
	private optionsModelSort: number[];
	private myOptions: IMultiSelectOption[];
	private myOptionsSort: IMultiSelectOption[];
	private mySettings: IMultiSelectSettings = {
		enableSearch: true,
		dynamicTitleMaxItems: 0,
		displayAllSelectedText: true,
		pullRight: true
	};

	private mySettingsSort: IMultiSelectSettings = {
		enableSearch: true,
		pullRight: true
	};

	private myTexts: IMultiSelectTexts = {
		checkAll: 'Select all',
		uncheckAll: 'Unselect all',
		checked: 'item selected',
		checkedPlural: 'items selected',
		searchPlaceholder: 'Search',
		defaultTitle: 'Select',
		allSelected: 'All selected',	
		searchEmptyResult: 'Nothing found...',
		searchNoRenderText: 'Type in search box to see results...'
	};

	constructor(private storyService:StoryService) {
		this.size = 20;
		this.filters = false;
		this.storyService.getStories(0, this.size, null).then(res => this.handleGetStories(res));	
	}

	ngOnInit() {
		this.myOptions = [
		{ id: 1, name: 'ADVENTURE' },
		{ id: 2, name: 'COMEDY' },
		{ id: 3, name: 'CRIME' },
		{ id: 4, name: 'FANTASY' },
		{ id: 5, name: 'HORROR' },
		{ id: 6, name: 'ROMANCE' },
		{ id: 7, name: 'SCIFI' }
		];
		this.myOptionsSort = [
		{ id: 8, name: 'Name ASC'},
		{ id: 9, name: 'Name DESC'},
		{ id: 10, name: 'Rate ASC'},
		{ id: 11, name: 'Rate DESC'}
		];
		this.sizes.push(10);
		this.sizes.push(30);
		this.sizes.push(50);
	}

	onChangeSort() {
		if(this.optionsModelSort.length == 1 && this.optionsModelSort.some(x => x == 8))
			this.myOptionsSort = [
		{ id: 8, name: 'Name ASC'},
		{ id: 10, name: 'Rate ASC'},
		{ id: 11, name: 'Rate DESC'}
		];
		else if(this.optionsModelSort.length == 1 && this.optionsModelSort.some(x => x == 9))
			this.myOptionsSort = [
		{ id: 9, name: 'Name DESC'},
		{ id: 10, name: 'Rate ASC'},
		{ id: 11, name: 'Rate DESC'}
		];
		else if(this.optionsModelSort.length == 1 && this.optionsModelSort.some(x => x == 10))
			this.myOptionsSort = [
		{ id: 8, name: 'Name ASC'},
		{ id: 9, name: 'Name DESC'},
		{ id: 10, name: 'Rate ASC'},
		];
		else if(this.optionsModelSort.length == 1 && this.optionsModelSort.some(x => x == 11))
			this.myOptionsSort = [
		{ id: 8, name: 'Name ASC'},
		{ id: 9, name: 'Name DESC'},
		{ id: 11, name: 'Rate DESC'}
		];
		else if(this.optionsModelSort.length == 2 && this.optionsModelSort.some(x => x == 8) && this.optionsModelSort.some(x => x == 10))
			this.myOptionsSort = [
		{ id: 8, name: 'Name ASC'},
		{ id: 10, name: 'Rate ASC'}
		];
		else if(this.optionsModelSort.length == 2 && this.optionsModelSort.some(x => x == 8) && this.optionsModelSort.some(x => x == 11))
			this.myOptionsSort = [
		{ id: 8, name: 'Name ASC'},
		{ id: 11, name: 'Rate DESC'}
		];
		else if(this.optionsModelSort.length == 2 && this.optionsModelSort.some(x => x == 9) && this.optionsModelSort.some(x => x == 10))
			this.myOptionsSort = [
		{ id: 9, name: 'Name DESC'},
		{ id: 10, name: 'Rate ASC'}
		];
		else if(this.optionsModelSort.length == 2 && this.optionsModelSort.some(x => x == 9) && this.optionsModelSort.some(x => x == 11))
			this.myOptionsSort = [
		{ id: 9, name: 'Name DESC'},
		{ id: 11, name: 'Rate DESC'}
		];
		else if(this.optionsModelSort.length == 0)
			this.myOptionsSort = [
		{ id: 8, name: 'Name ASC'},
		{ id: 9, name: 'Name DESC'},
		{ id: 10, name: 'Rate ASC'},
		{ id: 11, name: 'Rate DESC'}
		];
	}

	nextPage(index: number){
		this.page = this.page + index;
	}

	changePage(index:number){
		this.page = index;
	}

	private handleGetStories(res:ProxyResponse<Story>){
		if(res){
			this.stories = res.getList();
			this.elementOfPages = [];
			this.numberOfPages = 5;
			for (var i = 1; i <= this.numberOfPages; ++i)
				this.elementOfPages.push(i);
		}
	}

	public search(){
		this.storyService.getStories(0, 20, this.text).then(res => this.handleGetStories(res));
	}

	public reset(){
		this.text = null;
		this.storyService.getStories(0, 20, this.text).then(res => this.handleGetStories(res));
	}

	public showFilters(){
		this.filters = !this.filters;
	}

}
