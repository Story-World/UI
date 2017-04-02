export class User{
	id:number;
	name: String;
	password: String;
	mail: String;
	token: String;

	constructor(id?:number,name?:String,mail?:String,token?:String){
		this.id = id;
		this.name = name;
		this.mail = mail;
		this.token = token;
	}

	public getToken(){
		return this.token;
	}

}