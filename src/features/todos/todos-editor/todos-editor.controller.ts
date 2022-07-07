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
import { TodoService } from '../service/todos.service';
import { TodoDto } from 'src/models/todo-dto';
import {
	ApiTags,
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
	ApiBadRequestResponse
} from '@nestjs/swagger';

@Controller('Todos')
@ApiTags('Todos')
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
export class TodosEditorController extends BaseEditorController<TodoDto> {
	constructor(public Todoservice: TodoService) {
		super(Todoservice);
	}

	@Get(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: TodoDto })
	findById(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<TodoDto>> {
		return this.findDtoById(id);
	}

	@Post()
	@Version('1')
	@ApiBody({ type: TodoDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: TodoDto
	})
	newDto(@Body() dto: TodoDto): Observable<AxiosResponse<TodoDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
	@Version('1')
	@ApiBody({ type: TodoDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: TodoDto
	})
	updateDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: TodoDto
	): Observable<AxiosResponse<TodoDto>> {
		return this.modifyDto(id, dto);
	}

	@Delete(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: TodoDto
	})
	deleteDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<TodoDto>> {
		return this.removeDto(id);
	}
}
