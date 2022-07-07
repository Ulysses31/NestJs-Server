import { PhotoService } from './../service/Photos.service';
import { Controller, Get, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { PhotoDto } from 'src/models/photo-dto';
import {
	ApiTags,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiProduces,
	ApiOkResponse,
	ApiBadRequestResponse
} from '@nestjs/swagger';

@Controller('Photos')
@ApiTags('Photos')
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
export class PhotosBrowserController extends BaseBrowserController<PhotoDto> {
	constructor(public photoService: PhotoService) {
		super(photoService);
	}

	@Get()
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: PhotoDto })
	findAll(): Observable<AxiosResponse<PhotoDto[]>> {
		return this.findDtoAll();
	}
}
