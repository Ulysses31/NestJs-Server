import { Controller, Get, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { CommentDto } from 'src/models/comment-dto';
import { CommentService } from '../service/comments.service';

@Controller('Comments')
export class CommentsBrowserController extends BaseBrowserController<CommentDto> {
	constructor(public commentsService: CommentService) {
		super(commentsService);
	}

	@Version('1')
	@Get()
	findAll(): Observable<AxiosResponse<CommentDto[]>> {
		return this.findDtoAll();
	}
}
