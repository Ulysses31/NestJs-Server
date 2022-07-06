import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../service/users.service';
import { UsersBrowserController } from './users-browser.controller';

describe('UsersBrowserController', () => {
	let controller: UsersBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UsersBrowserController],
			providers: [UserService]
		}).compile();

		controller = module.get<UsersBrowserController>(
			UsersBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
