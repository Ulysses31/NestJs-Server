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
import { CommentDto } from 'src/models/comment.dto';
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
	ApiCreatedResponse,
	ApiBearerAuth,
	ApiOperation
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/authentication/jwt-auth.guard';

@Controller('Comments')
@UseGuards(JwtAuthGuard)
@ApiTags('Comments')
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
export class CommentsEditorController extends BaseEditorController<CommentDto> {
	constructor(public commentservice: CommentService) {
		super(commentservice);
	}

	@Get(':id')
	@Version('1')
	@ApiOperation({ description: 'Get comment by id' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: CommentDto })
	findByIdV1(
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
	@ApiOperation({ description: 'Insert new comment' })
	@ApiBody({ type: CommentDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: CommentDto
	})
	newDtoV1(
		@Body() dto: CommentDto
	): Observable<AxiosResponse<CommentDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
	@Version('1')
	@ApiOperation({ description: 'Update existing comment' })
	@ApiBody({ type: CommentDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: CommentDto
	})
	updateDtoV1(
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
	@ApiOperation({ description: 'Delete comment' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: CommentDto
	})
	deleteDtoV1(
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
