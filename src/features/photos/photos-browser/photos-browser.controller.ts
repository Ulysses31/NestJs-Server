import { PhotoService } from './../service/Photos.service';
import { Controller, Get, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { UserDto } from 'src/models/user-dto';
import { PhotoDto } from 'src/models/photo-dto';

@Controller('Photos')
export class PhotosBrowserController extends BaseBrowserController<PhotoDto> {
	constructor(public photoService: PhotoService) {
		super(photoService);
	}

	@Version('1')
	@Get()
	findAll(): Observable<AxiosResponse<UserDto[]>> {
		return this.findDtoAll();
	}
}
