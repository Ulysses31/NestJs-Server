import { Test, TestingModule } from '@nestjs/testing';
import { PhotoService } from '../service/Photos.service';
import { PhotosBrowserController } from './Photos-browser.controller';

describe('PhotosBrowserController', () => {
	let controller: PhotosBrowserController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [PhotosBrowserController],
			providers: [PhotoService]
		}).compile();

		controller = module.get<PhotosBrowserController>(
			PhotosBrowserController
		);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});
});
