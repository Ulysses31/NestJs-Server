import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BaseService } from 'src/core/services/base.service';
import { PostDto } from 'src/models/post-dto';

@Injectable()
export class PostService extends BaseService<PostDto> {
	apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';

	constructor(public readonly httpService: HttpService) {
		super(httpService);
		this.setApiUrl(this.apiUrl);
	}
}
