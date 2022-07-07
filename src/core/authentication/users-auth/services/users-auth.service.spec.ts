import { Test, TestingModule } from '@nestjs/testing';
import { UserAuthService } from './users-auth.service';

describe('UsersService', () => {
	let service: UserAuthService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UserAuthService]
		}).compile();
		UserAuthService;

		service = module.get<UserAuthService>(UserAuthService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
