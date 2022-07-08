import { PhotoService } from './../service/Photos.service';
import { Controller, Get, UseGuards, Version } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BaseBrowserController } from 'src/core/base-browser-controller';
import { AxiosResponse } from 'axios';
import { PhotoDto } from 'src/models/photo.dto';
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

@Controller('Photos')
@UseGuards(JwtAuthGuard)
@ApiTags('Photos')
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
export class PhotosBrowserController extends BaseBrowserController<PhotoDto> {
	constructor(public photoService: PhotoService) {
		super(photoService);
	}

	@Get()
	@Version('1')
	@ApiOperation({ description: 'List of photos' })
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: PhotoDto })
	findAllV1(): Observable<AxiosResponse<PhotoDto[]>> {
		return this.findDtoAll();
	}
}
