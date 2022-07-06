import { CompanyDto } from './company-dto.interface';
import { AddressDto } from './address-dto.interface';
import { BaseModelDto } from './../core/models/base-model-dto';

export interface UserDto extends BaseModelDto {
	id?: null | string;
	name?: null | string;
	username?: null | string;
	email?: null | string;
	address?: AddressDto;
	phone?: null | string;
	website?: null | string;
	company?: CompanyDto;
}
