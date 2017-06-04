import { Role } from './role.class';

export class User{
	id:number;
	name: String;
	password: String;
	mail: String;
	token: string;
	roles: Array<Role>;
	block:boolean;

	constructor(id?:number,name?:String,mail?:String,token?:string,roles?:Array<Role>,block?:boolean){
		this.id = id;
		this.name = name;
		this.mail = mail;
		this.token = token;
		this.roles = roles;
		this.block = block;
	}

	public getToken():string{
		return this.token;
	}

	public getRoles():Array<Role>{
		return this.roles;
	}

	public getId():number{
		return this.id;
	}

	public getBlock():boolean{
		return this.block;
	}
}