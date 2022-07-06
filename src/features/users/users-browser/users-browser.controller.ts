import { Controller, Get, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { UserDto } from 'src/models/user-dto';
import { UserService } from '../service/users.service';

@Controller('Users')
export class UsersBrowserController extends BaseBrowserController<UserDto> {
	constructor(public UsersService: UserService) {
		super(UsersService);
	}

	@Version('1')
	@Get()
	findAll(): Observable<AxiosResponse<UserDto[]>> {
		return this.findDtoAll();
	}
}
