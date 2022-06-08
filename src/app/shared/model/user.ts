export class User {
	id?: number;
	userName: string;
	firstName: string;
	lastName: string;
	password?: string;
	idRole: number;

	constructor(userName: string, firstName: string, lastName: string, password: string, idRole: number) {
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
		this.idRole = idRole;
	}
}