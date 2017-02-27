export class FavouritePlace{
	facet: string;
	name: string;
	url: string;

	constructor(name:string, facet:string, url:string){
		this.name = name;
		this.facet = facet;
		this.url = url;
	}
}