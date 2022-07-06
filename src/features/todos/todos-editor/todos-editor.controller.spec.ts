import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from '../service/todos.service';
import { TodosEditorController } from './Todos-editor.controller';

describe('TodosEditorController', () => {
	let controller: TodosEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [TodosEditorController],
			providers: [TodoService]
		}).compile();

		controller = module.get<TodosEditorController>(
			TodosEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
