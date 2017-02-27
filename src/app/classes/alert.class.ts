import { ResponseMessage } from './responseMessage.class';

export class Alert{
	private status: ResponseStatusMessage;
	private message: string;

	constructor(responseMessage:ResponseMessage) {
		this.status = responseMessage.status;
		this.message = responseMessage.message;
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