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
	UseGuards,
	Version
} from '@nestjs/common';
import { BaseEditorController } from 'src/core/base-Editor-controller';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { PostService } from '../service/posts.service';
import { PostDto } from 'src/models/post.dto';
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
export class PostsEditorController extends BaseEditorController<PostDto> {
	constructor(public postservice: PostService) {
		super(postservice);
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get post by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: PostDto })
	findByIdV1(
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
	@ApiOperation({ description: 'Insert new post' })
	@ApiBody({ type: PostDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: PostDto
	})
	newDtoV1(@Body() dto: PostDto): Observable<AxiosResponse<PostDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing post' })
	@ApiBody({ type: PostDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: PostDto
	})
	updateDtoV1(
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
	@ApiOperation({ description: 'Delete todo' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: PostDto
	})
	deleteDtoV1(
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
