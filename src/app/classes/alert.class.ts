import { ResponseMessage } from './responseMessage.class';
import { ResponseStatusMessage } from './responseStatusMessage.class';

export class Alert{
	private status: ResponseStatusMessage;
	private message: String;

	constructor(responseMessage?:ResponseMessage) {
		if(responseMessage){
			this.status = responseMessage.status;
			this.message = responseMessage.message;
		}
	}

	public setStatus(status:ResponseStatusMessage){
		this.status = status;
	}

	public getStatus(){
		return this.status;
	}

	public setMessage(message:String){
		this.message = message;
	}

	public getMessage(){
		return this.message;
	}
}