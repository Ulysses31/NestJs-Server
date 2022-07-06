import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../service/posts.service';
import { PostsBrowserController } from './Posts-browser.controller';

describe('PostsBrowserController', () => {
	let controller: PostsBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [PostsBrowserController],
			providers: [PostService]
		}).compile();

		controller = module.get<PostsBrowserController>(
			PostsBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
