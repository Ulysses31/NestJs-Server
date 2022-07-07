import {
	Body,
	Controller,
	Delete,
	Get,
	HttpStatus,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Version
} from '@nestjs/common';
import { BaseEditorController } from 'src/core/base-Editor-controller';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { PostService } from '../service/posts.service';
import { PostDto } from 'src/models/post-dto';
import {
	ApiTags,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiProduces,
	ApiOkResponse,
	ApiBody,
	ApiConsumes,
	ApiCreatedResponse,
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
export class PostsEditorController extends BaseEditorController<PostDto> {
	constructor(public postservice: PostService) {
		super(postservice);
	}

	@Get(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: PostDto })
	findById(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<PostDto>> {
		return this.findDtoById(id);
	}

	@Post()
	@Version('1')
	@ApiBody({ type: PostDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: PostDto
	})
	newDto(@Body() dto: PostDto): Observable<AxiosResponse<PostDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
	@Version('1')
	@ApiBody({ type: PostDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: PostDto
	})
	updateDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: PostDto
	): Observable<AxiosResponse<PostDto>> {
		return this.modifyDto(id, dto);
	}

	@Delete(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: PostDto
	})
	deleteDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<PostDto>> {
		return this.removeDto(id);
	}
}
