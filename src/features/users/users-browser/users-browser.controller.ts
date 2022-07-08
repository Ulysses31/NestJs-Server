import { Controller, Get, UseGuards, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { UserDto } from 'src/models/user.dto';
import { UserService } from '../service/users.service';
import {
	ApiBadRequestResponse,
	ApiBearerAuth,
	ApiForbiddenResponse,
	ApiInternalServerErrorResponse,
	ApiNotAcceptableResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiProduces,
	ApiTags,
	ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/core/authentication/jwt-auth.guard';

@Controller('Users')
@UseGuards(JwtAuthGuard)
@ApiTags('Users')
// @ApiSecurity('basic')
// @ApiBasicAuth()
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
export class UsersBrowserController extends BaseBrowserController<UserDto> {
	constructor(public UsersService: UserService) {
		super(UsersService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of users' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: UserDto })
	findAllV1(): Observable<AxiosResponse<UserDto[]>> {
		return this.findDtoAll();
	}
}
