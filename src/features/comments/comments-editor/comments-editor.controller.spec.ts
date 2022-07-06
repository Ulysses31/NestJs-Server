import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from '../service/comments.service';
import { CommentsEditorController } from './comments-editor.controller';

describe('CommentsEditorController', () => {
	let controller: CommentsEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CommentsEditorController],
			providers: [CommentService]
		}).compile();

		controller = module.get<CommentsEditorController>(
			CommentsEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
