import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BaseService } from 'src/core/services/base.service';
import { PhotoDto } from 'src/models/photo.dto';

@Injectable()
export class PhotoService extends BaseService<PhotoDto> {
	apiUrl: string = process.env.API_URL_PHOTOS;

	constructor(public readonly httpService: HttpService) {
		super(httpService);
		this.setApiUrl(this.apiUrl);
	}
}
