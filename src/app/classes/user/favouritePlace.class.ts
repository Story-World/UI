export class FavouritePlace{
	type: String;
	facet: String;
	name: String;
	url: string;

	constructor(type?:String, name?:String, facet?:String, url?:string){
		this.type = type;
		this.name = name;
		this.facet = facet;
		this.url = url;
	}
}