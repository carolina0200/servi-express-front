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

		if (token) {
			if(this.validTokenExp(token)) {
				if(this.validRol(expectedRol, token)) {
					localStorage.setItem('user', this.getTokenInfo(token).sub);
					return true;
				} else {
					this.router.navigate(['/home']);
					return false;
				}
			}
		}
		this.router.navigate(['/login']);
		return false;
	}

	validTokenExp(token: string): boolean {
		const exp: number = this.getTokenInfo(token).exp;
		//return true;
		return Date.now() < exp * 1000
	}

	validRol(expectedRol: string[], token: string) {
		const role: string = this.getTokenInfo(token).roles[0];
		console.log(this.getTokenInfo(token));
		console.log('expected', expectedRol);
		console.log('rol', role);
		localStorage.setItem('role', role);
		return expectedRol.includes(role);
	}

	private getTokenInfo(token: string) {
		return JSON.parse(atob(token.split('.')[1]));
	}

}