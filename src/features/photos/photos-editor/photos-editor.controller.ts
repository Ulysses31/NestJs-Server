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
import { PhotoDto } from 'src/models/photo-dto';
import { PhotoService } from '../service/Photos.service';
import {
	ApiTags,
	ApiBadRequestResponse,
	ApiUnauthorizedResponse,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiNotAcceptableResponse,
	ApiInternalServerErrorResponse,
	ApiProduces,
	ApiOkResponse,
	ApiBody,
	ApiConsumes,
	ApiCreatedResponse
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
export class PhotosEditorController extends BaseEditorController<PhotoDto> {
	constructor(public photoservice: PhotoService) {
		super(photoservice);
	}

	@Get(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({ description: 'OK success', type: PhotoDto })
	findById(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<PhotoDto>> {
		return this.findDtoById(id);
	}

	@Post()
	@Version('1')
	@ApiBody({ type: PhotoDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiCreatedResponse({
		description: 'The record has been successfully created',
		type: PhotoDto
	})
	newDto(@Body() dto: PhotoDto): Observable<AxiosResponse<PhotoDto>> {
		return this.insertNewDto(dto);
	}

	@Put(':id')
	@Version('1')
	@ApiBody({ type: PhotoDto })
	@ApiProduces('application/json', 'application/xml')
	@ApiConsumes('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully updated',
		type: PhotoDto
	})
	updateDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number,
		@Body() dto: PhotoDto
	): Observable<AxiosResponse<PhotoDto>> {
		return this.modifyDto(id, dto);
	}

	@Delete(':id')
	@Version('1')
	@ApiProduces('application/json', 'application/xml')
	@ApiOkResponse({
		description: 'The record has been successfully deleted',
		type: PhotoDto
	})
	deleteDto(
		@Param(
			'id',
			new ParseIntPipe({
				errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
			})
		)
		id: number
	): Observable<AxiosResponse<PhotoDto>> {
		return this.removeDto(id);
	}
}
