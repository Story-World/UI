export class Alert{
	private status: number;
	private message: string;

	constructor(status:number, message:string){
		this.status = status;
		this.message = message;
	}

	public setStatus(status:number){
		this.status = status;
	}

	public getStatus(){
		return this.status;
	}

	public setMessage(message:string){
		this.message = message;
	}

	public getMessage(){
		return this.message;
	}
}