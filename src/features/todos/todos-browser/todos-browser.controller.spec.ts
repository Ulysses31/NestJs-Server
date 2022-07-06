import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from '../service/todos.service';
import { TodosBrowserController } from './todos-browser.controller';

describe('TodosBrowserController', () => {
	let controller: TodosBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TodosBrowserController],
			providers: [TodoService]
		}).compile();

		controller = module.get<TodosBrowserController>(
			TodosBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
