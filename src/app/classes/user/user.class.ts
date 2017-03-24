export class User{
	id:number;
	name: String;
	password: String;
	mail: String;

	constructor(id?:number,name?:String,mail?:String){
		this.id = id;
		this.name = name;
		this.mail = mail;
	}

}