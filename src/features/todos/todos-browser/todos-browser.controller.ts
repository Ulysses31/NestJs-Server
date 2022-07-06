import { TodoService } from './../service/todos.service';
import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { UserDto } from 'src/models/user-dto';

@Controller('Todos')
export class TodosBrowserController extends BaseBrowserController<UserDto> {
	constructor(public TodosService: TodoService) {
		super(TodosService);
	}

	@Get()
	findAll(): Observable<AxiosResponse<UserDto[]>> {
		return this.findDtoAll();
	}
}
