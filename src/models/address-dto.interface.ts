import { GeoDto } from './geo-dto.interface';
import { BaseModelDto } from 'src/core/models/base-model-dto';

export interface AddressDto extends BaseModelDto {
	id?: null | string;
	street?: null | string;
	suite?: null | string;
	city?: null | string;
	zipcode?: null | string;
	geo?: GeoDto;
}
