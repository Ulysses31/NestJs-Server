import { BaseModelDto } from 'src/core/models/base-model-dto';

export interface GeoDto extends BaseModelDto {
	id?: null | string;
	lat?: null | string;
	lng?: null | string;
}
