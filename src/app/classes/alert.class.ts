import { ResponseMessage } from './responseMessage.class';
import { AlertStatus } from './alertStatus.enum';

export class Alert{

	private status: AlertStatus;
	private message: String;

	constructor(responseMessage?: ResponseMessage) {
		if(responseMessage){
			this.status = responseMessage.status;
			this.message = responseMessage.message;
		}
	}

	public setStatus(status: AlertStatus){
		this.status = status;
	}

	public getStatus(){
		return this.status;
	}

	public setMessage(message: String){
		this.message = message;
	}

	public getMessage(){
		return this.message;
	}

}
