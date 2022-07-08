import { TodoService } from './../service/todos.service';
import { Controller, Get, UseGuards, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { TodoDto } from 'src/models/todo.dto';
import {
	ApiTags,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiProduces,
	ApiOkResponse,
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiOperation
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/authentication/jwt-auth.guard';

@Controller('Todos')
@UseGuards(JwtAuthGuard)
@ApiTags('Todos')
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
export class TodosBrowserController extends BaseBrowserController<TodoDto> {
	constructor(public TodosService: TodoService) {
		super(TodosService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of todos' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: TodoDto })
	findAllV1(): Observable<AxiosResponse<TodoDto[]>> {
		return this.findDtoAll();
	}
}
