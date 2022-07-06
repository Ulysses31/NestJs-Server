import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { PostDto } from 'src/models/post-dto';
import { PostService } from '../service/posts.service';

@Controller('Posts')
export class PostsBrowserController extends BaseBrowserController<PostDto> {
	constructor(public postsService: PostService) {
		super(postsService);
	}

	@Get()
	findAll(): Observable<AxiosResponse<PostDto[]>> {
		return this.findDtoAll();
	}
}
