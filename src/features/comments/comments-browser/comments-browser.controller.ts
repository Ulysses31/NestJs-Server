import { Controller, Get, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { CommentDto } from 'src/models/comment-dto';
import { CommentService } from '../service/comments.service';
import {
	ApiTags,
	ApiBadRequestResponse,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiProduces,
	ApiOkResponse
} from '@nestjs/swagger';

@Controller('Comments')
@ApiTags('Comments')
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
export class CommentsBrowserController extends BaseBrowserController<CommentDto> {
	constructor(public commentsService: CommentService) {
		super(commentsService);
	}

	@Get()
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CommentDto })
	findAll(): Observable<AxiosResponse<CommentDto[]>> {
		return this.findDtoAll();
	}
}
