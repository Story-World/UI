import {Component, OnInit} from '@angular/core';

import {Story} from '../../classes/story/story.class';
import {StoryType} from '../../classes/story/storyType.enum';

import {StoryService} from '../../services/story/story.service';
import {UserDataProvider} from '../../services/userDataProvider.service';

import {ProxyResponse} from '../../classes/response.class';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import {RatingModule} from "ngx-rating";


@Component({
	selector: 'storyList',
	templateUrl: './storyList.component.html',
	styleUrls: ['../../styles/styles.scss']
})
export class StoryListComponent implements OnInit {

	private stories: Array<Story> = new Array<Story>();
	private size: number;
	private text: string;
	private positiveIndex: boolean = false;
	private filters: boolean;
	private sizes: Array<Number> = new Array<Number>();
	private page: number = 1;
	private numberOfPages: number;
	private elementOfPages: Array<String> = new Array<String>();
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

	constructor(private userDataProvider: UserDataProvider, private storyService:StoryService) {
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
		console.log(this.optionsModelSort);
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

	private nextPage(index:number){
		this.page = this.page + index;

		if(this.page%5 == 0 && index > 0){
			this.elementOfPages = [];
			for (var i = this.page; i <= this.numberOfPages; ++i){
				if(i<=4+this.page || i>this.numberOfPages-5)
					this.elementOfPages.push(i.toString());
			}
			if(this.numberOfPages>5)
				this.elementOfPages.splice(5,0,"...");
			if(this.page>=5)
				this.elementOfPages.splice(0,0,"...");
			if(this.page == this.elementOfPages.length)
				this.elementOfPages.splice(this.page,1);
			if(this.page == this.numberOfPages)
				this.elementOfPages.splice(this.elementOfPages.length-1,1);
		} else if(index < 0){
			this.elementOfPages = [];
			for (var i = this.page; i <= this.numberOfPages; ++i){
				if(i<=4+this.page || i>this.numberOfPages-5)
					this.elementOfPages.push(i.toString());
			}
			if(this.numberOfPages>5)
				this.elementOfPages.splice(5,0,"...");
			if(this.page>=5 || index<0)
				this.elementOfPages.splice(0,0,"...");
			if(this.page+5 > this.numberOfPages)
				this.elementOfPages.splice(this.elementOfPages.length-1,1);
			if(this.page == 1)
				this.elementOfPages.splice(0,1);
		}

		if(index<0 && this.page<=4 && this.page != 1)
			this.positiveIndex = true;
		else
			this.positiveIndex = false;

		if(this.page == this.numberOfPages || this.page+4 >= this.numberOfPages){
			this.elementOfPages = [];
			for (var i = 1; i <= this.numberOfPages; ++i){
				if(i<=5 || i>this.numberOfPages-5)
					this.elementOfPages.push(i.toString());
			}
			if(this.numberOfPages>5)
				this.elementOfPages.splice(5,0,"...");
		}

	}

	private changePage(index:number){
		this.page =+ index;
		if(this.page%5 == 0 && index > 0){
			this.elementOfPages = [];
			for (var i = this.page; i <= this.numberOfPages; ++i){
				if(i<=4+this.page || i>this.numberOfPages-5)
					this.elementOfPages.push(i.toString());
			}
			if(this.numberOfPages>5)
				this.elementOfPages.splice(5,0,"...");
			if(this.page>=5)
				this.elementOfPages.splice(0,0,"...");
			if(this.page == this.elementOfPages.length)
				this.elementOfPages.splice(this.page,1);
			if(this.page == this.numberOfPages)
				this.elementOfPages.splice(this.elementOfPages.length-1,1);
		} else if(this.page < 5){
			this.elementOfPages = [];
			for (var i = 1; i <= this.numberOfPages; ++i){
				if(i<=5 || i>this.numberOfPages-5)
					this.elementOfPages.push(i.toString());
			}
			if(this.numberOfPages>5)
				this.elementOfPages.splice(5,0,"...");
		}
		if(this.page == this.numberOfPages){
			this.elementOfPages = [];
			for (var i = 1; i <= this.numberOfPages; ++i){
				if(i<=5 || i>this.numberOfPages-5)
					this.elementOfPages.push(i.toString());
			}
			if(this.numberOfPages>5)
				this.elementOfPages.splice(5,0,"...");
		}
	}

	private handleGetStories(res:ProxyResponse<Story>){
		if(res){
			this.stories = res.getList();
			this.elementOfPages = [];
			this.numberOfPages = 50;
			for (var i = 1; i <= this.numberOfPages; ++i){
				if(i<=5 || i>this.numberOfPages-5)
					this.elementOfPages.push(i.toString());
			}
			if(this.numberOfPages>5)
				this.elementOfPages.splice(5,0,"...");

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
