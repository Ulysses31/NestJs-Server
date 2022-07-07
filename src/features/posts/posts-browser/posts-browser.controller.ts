import { Controller, Get, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { PostDto } from 'src/models/post-dto';
import { PostService } from '../service/posts.service';
import {
	ApiTags,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiProduces,
	ApiOkResponse,
	ApiBadRequestResponse
} from '@nestjs/swagger';

@Controller('Posts')
@ApiTags('Posts')
@ApiBadRequestResponse({ description: 'Bad Request' })
@ApiUnauthorizedResponse({ description: 'User not authorized' })
@ApiForbiddenResponse({ description: 'Request is forbidden' })
@ApiNotFoundResponse({ description: 'Request not found' })
@ApiNotAcceptableResponse({
	description: 'Request is not acceptable'
})
@ApiInternalServerErrorResponse({
	description: 'Internal Server Error'
})
export class PostsBrowserController extends BaseBrowserController<PostDto> {
	constructor(public postsService: PostService) {
		super(postsService);
	}

	@Get()
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: PostDto })
	findAll(): Observable<AxiosResponse<PostDto[]>> {
		return this.findDtoAll();
	}
}
