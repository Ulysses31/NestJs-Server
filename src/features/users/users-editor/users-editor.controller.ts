import { UserService } from './../service/users.service';
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
import { UserDto } from 'src/models/user-dto';
import {
	ApiBadRequestResponse,
	ApiBody,
	ApiConsumes,
	ApiCreatedResponse,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiNotAcceptableResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiProduces,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger';

@Controller('Users')
@ApiTags('Users')
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
export class UsersEditorController extends BaseEditorController<UserDto> {
	constructor(public UserService: UserService) {
		super(UserService);
	}

	@Get(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: UserDto })
	findById(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<UserDto>> {
		return this.findDtoById(id);
	}

	@Post()
	@Version('1')
	@ApiBody({ type: UserDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: UserDto
	})
	newDto(@Body() dto: UserDto): Observable<AxiosResponse<UserDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
	@Version('1')
	@ApiBody({ type: UserDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: UserDto
	})
	updateDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: UserDto
	): Observable<AxiosResponse<UserDto>> {
		return this.modifyDto(id, dto);
	}

	@Delete(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: UserDto
	})
	deleteDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<UserDto>> {
		return this.removeDto(id);
	}
}
