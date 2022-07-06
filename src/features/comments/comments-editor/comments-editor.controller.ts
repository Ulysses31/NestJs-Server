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

@Controller('Comments')
export class CommentsEditorController extends BaseEditorController<CommentDto> {
	constructor(public commentservice: CommentService) {
		super(commentservice);
	}

	@Version('1')
	@Get(':id')
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

	@Version('1')
	@Post()
	newDto(
		@Body() dto: CommentDto
	): Observable<AxiosResponse<CommentDto>> {
		return this.insertNewDto(dto);
	}

	@Version('1')
	@Put(':id')
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

	@Version('1')
	@Delete(':id')
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
