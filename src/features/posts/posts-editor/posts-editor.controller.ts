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

@Controller('Posts')
export class PostsEditorController extends BaseEditorController<PostDto> {
	constructor(public postservice: PostService) {
		super(postservice);
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
	): Observable<AxiosResponse<PostDto>> {
		return this.findDtoById(id);
	}

	@Version('1')
	@Post()
	newDto(@Body() dto: PostDto): Observable<AxiosResponse<PostDto>> {
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
		@Body() dto: PostDto
	): Observable<AxiosResponse<PostDto>> {
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
	): Observable<AxiosResponse<PostDto>> {
		return this.removeDto(id);
	}
}
