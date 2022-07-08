import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UserDto } from 'src/models/user.dto';
import { BaseService } from 'src/core/services/base.service';

@Injectable()
export class UserService extends BaseService<UserDto> {
	apiUrl: string = process.env.API_URL_USERS;

	constructor(public readonly httpService: HttpService) {
		super(httpService);
		this.setApiUrl(this.apiUrl);
	}
}
