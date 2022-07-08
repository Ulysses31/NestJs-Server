import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { TodoDto } from 'src/models/todo.dto';
import { BaseService } from 'src/core/services/base.service';

@Injectable()
export class TodoService extends BaseService<TodoDto> {
	apiUrl: string = process.env.API_URL_TODOS;

	constructor(public readonly httpService: HttpService) {
		super(httpService);
		this.setApiUrl(this.apiUrl);
	}
}
