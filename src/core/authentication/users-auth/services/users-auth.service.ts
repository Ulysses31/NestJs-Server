import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { User } from 'src/core/models/user-model-dto';

@Injectable()
export class UsersAuthService {
	private readonly users: User[] = [
		{
			id: '1',
			username: 'john',
			password: 'changeme',
			email: 'admin@test.com',
			access_token: '',
			refresh_token: ''
		},
		{
			id: '2',
			username: 'maria',
			password: 'guess',
			email: 'user@test.com',
			access_token: '',
			refresh_token: ''
		}
	];

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find(
			(user: User) => user.username === username
		);
	}

	async getUserByEmail(email: string): Promise<User | undefined> {
		return this.users.find((user: User) => user.email === email);
	}

	async updateUsersTokens(
		id: string,
		access_token: string,
		refresh_token: string
	): Promise<User | undefined> {
		var usr: User = this.users.find((item) => item.id === id);
		usr.access_token = access_token;
		usr.refresh_token = refresh_token;
		return usr;
	}
}
