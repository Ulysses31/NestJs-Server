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
	Put
} from '@nestjs/common';
import { BaseEditorController } from 'src/core/base-Editor-controller';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { UserDto } from 'src/models/user-dto';

@Controller('Users')
export class UsersEditorController extends BaseEditorController<UserDto> {
	constructor(public UserService: UserService) {
		super(UserService);
	}

	@Get(':id')
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
	newDto(@Body() dto: UserDto): Observable<AxiosResponse<UserDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
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
