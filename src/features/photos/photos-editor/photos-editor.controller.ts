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
import { PhotoDto } from 'src/models/photo-dto';
import { PhotoService } from '../service/Photos.service';

@Controller('Photos')
export class PhotosEditorController extends BaseEditorController<PhotoDto> {
	constructor(public photoservice: PhotoService) {
		super(photoservice);
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
	): Observable<AxiosResponse<PhotoDto>> {
		return this.findDtoById(id);
	}

	@Post()
	newDto(@Body() dto: PhotoDto): Observable<AxiosResponse<PhotoDto>> {
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
		@Body() dto: PhotoDto
	): Observable<AxiosResponse<PhotoDto>> {
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
	): Observable<AxiosResponse<PhotoDto>> {
		return this.removeDto(id);
	}
}