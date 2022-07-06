import { BaseModelDto } from './../core/models/base-model-dto';

export interface PhotoDto extends BaseModelDto {
	id?: null | string;
	albumId?: null | string;
	title?: null | string;
	url?: null | string;
	thumbnailUrl?: null | string;
}
