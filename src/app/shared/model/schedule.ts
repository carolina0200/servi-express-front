export class Schedule {
	id?: number;
	type: string;
	description: string;
	date: string;
	username: string;
	warehouse: number;
	addressee: string;
	code?: string;

	constructor(type: string, description: string, date: string, user: string, addressee: string, warehouse: number) {
		this.id = 0;
		this.type = type;
		this.description = description;
		this.date = date;
		this.username = user;
		this.addressee = addressee;
		this.warehouse = warehouse;
		this.code = '';
	}
}