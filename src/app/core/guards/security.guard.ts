import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
	constructor(private readonly router: Router) { }

	canActivate(route: ActivatedRouteSnapshot) {
		const expectedRol = route.data['expectedRol'];
		let token = localStorage.getItem("token");

		if(!token) {
			this.router.navigate(['/login']);
			return false;
		} else {
			if(this.validTokenExp(token)) {
				if(this.validRol(expectedRol, token)) {
					return true;
				} else {
					return false;
				}
			} else {
				return false
			}
		}
	}

	validTokenExp(token: string): boolean {
		const exp: number = this.getTokenInfo(token).exp;
		return Date.now() < exp * 1000
	}

	validRol(expectedRol: string[], token: string) {
		const rol: string = this.getTokenInfo(token).roles[0];
		return expectedRol.includes(rol);
	}

	private getTokenInfo(token: string) {
		return JSON.parse(atob(token.split('.')[1]));
	}

}