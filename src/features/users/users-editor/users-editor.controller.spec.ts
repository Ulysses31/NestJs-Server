import { UserService } from './../service/users.service';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersEditorController } from './users-editor.controller';

describe('UsersEditorController', () => {
	let controller: UsersEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [UsersEditorController],
			providers: [UserService]
		}).compile();

		controller = module.get<UsersEditorController>(
			UsersEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
