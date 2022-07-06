import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BaseService } from 'src/core/services/base.service';
import { CommentDto } from 'src/models/comment-dto';

@Injectable()
export class CommentService extends BaseService<CommentDto> {
	apiUrl: string = 'https://jsonplaceholder.typicode.com/comments';

	constructor(public readonly httpService: HttpService) {
		super(httpService);
		this.setApiUrl(this.apiUrl);
	}
}
