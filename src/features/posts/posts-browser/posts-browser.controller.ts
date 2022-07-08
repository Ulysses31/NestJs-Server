import { Controller, Get, UseGuards, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { PostDto } from 'src/models/post.dto';
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
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiOperation
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/authentication/jwt-auth.guard';

@Controller('Posts')
@UseGuards(JwtAuthGuard)
@ApiTags('Posts')
@ApiBearerAuth()
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
	@ApiOperation({ description: 'List of posts' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: PostDto })
	findAllV1(): Observable<AxiosResponse<PostDto[]>> {
		return this.findDtoAll();
	}
}
