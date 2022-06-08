export class Schedule {
	id?: number;
	type: string;
	description: string;
	date: string;
	user: string;
	warehouse: number;
	code?: string;

	constructor(type: string, description: string, date: string, user: string, warehouse: number) {
		this.id = 0;
		this.type = type;
		this.description = description;
		this.date = date;
		this.user = user;
		this.warehouse = warehouse;
		this.code = '';
	}
}