import { Controller, Get, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { UserDto } from 'src/models/user-dto';
import { UserService } from '../service/users.service';
import {
	ApiBadRequestResponse,
	ApiBasicAuth,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiNotAcceptableResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiProduces,
	ApiSecurity,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger';

@Controller('Users')
@ApiTags('Users')
// @ApiSecurity('basic')
// @ApiBasicAuth()
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
export class UsersBrowserController extends BaseBrowserController<UserDto> {
	constructor(public UsersService: UserService) {
		super(UsersService);
	}

	@Get()
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: UserDto })
	findAll(): Observable<AxiosResponse<UserDto[]>> {
		return this.findDtoAll();
	}
}
