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
	ApiOkResponse,
	ApiBody,
	ApiConsumes,
	ApiCreatedResponse
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
export class CommentsEditorController extends BaseEditorController<CommentDto> {
	constructor(public commentservice: CommentService) {
		super(commentservice);
	}

	@Get(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CommentDto })
	findById(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<CommentDto>> {
		return this.findDtoById(id);
	}

	@Post()
	@Version('1')
	@ApiBody({ type: CommentDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: CommentDto
	})
	newDto(
		@Body() dto: CommentDto
	): Observable<AxiosResponse<CommentDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
	@Version('1')
	@ApiBody({ type: CommentDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: CommentDto
	})
	updateDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: CommentDto
	): Observable<AxiosResponse<CommentDto>> {
		return this.modifyDto(id, dto);
	}

	@Delete(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: CommentDto
	})
	deleteDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<CommentDto>> {
		return this.removeDto(id);
	}
}
