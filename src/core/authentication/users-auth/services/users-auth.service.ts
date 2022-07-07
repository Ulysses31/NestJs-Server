import { Injectable } from '@nestjs/common';
import { User } from 'src/core/models/user-model-dto';

@Injectable()
export class UsersAuthService {
	private readonly users = [
		{
			userId: 1,
			username: 'john',
			password: 'changeme'
		},
		{
			userId: 2,
			username: 'maria',
			password: 'guess'
		}
	];

	async findOne(username: string): Promise<User | undefined> {
		return this.users.find((user) => user.username === username);
	}
}
