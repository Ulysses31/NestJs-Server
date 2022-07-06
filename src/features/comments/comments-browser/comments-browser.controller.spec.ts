import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from '../service/comments.service';
import { CommentsBrowserController } from './Comments-browser.controller';

describe('CommentsBrowserController', () => {
	let controller: CommentsBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [CommentsBrowserController],
			providers: [CommentService]
		}).compile();

		controller = module.get<CommentsBrowserController>(
			CommentsBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
