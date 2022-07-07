import { Injectable } from '@nestjs/common';
import { UsersAuthService } from '../users-auth/services/users-auth.service';

@Injectable()
export class AuthService {
	constructor(private usersService: UsersAuthService) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.usersService.findOne(username);
		if (user && user.password === pass) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}
}
