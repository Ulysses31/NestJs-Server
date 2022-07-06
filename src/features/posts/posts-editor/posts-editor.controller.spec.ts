import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../service/posts.service';
import { PostsEditorController } from './Posts-editor.controller';

describe('PostsEditorController', () => {
	let controller: PostsEditorController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [PostsEditorController],
			providers: [PostService]
		}).compile();

		controller = module.get<PostsEditorController>(
			PostsEditorController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
