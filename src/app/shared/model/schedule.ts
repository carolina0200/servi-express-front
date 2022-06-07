export class Schedule {
	type: string;
	description: string;
	date:string;
	user: number;
	warehouse: number;

	constructor(type: string, description: string, date: string, user: number, warehouse: number) {
		this.type = type;
		this.description = description;
		this.date = date;
		this.user = user;
		this.warehouse = warehouse
	}
}