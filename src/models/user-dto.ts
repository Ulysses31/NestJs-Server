import { CompanyDto } from './company-dto';
import { AddressDto } from './address-dto';
import { BaseModelDto } from './../core/models/base-model-dto';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Users name',
		nullable: false,
		required: true
	})
	name?: null | string;

	@ApiProperty({
		type: String,
		description: 'Users username',
		nullable: false,
		required: true
	})
	username?: null | string;

	@ApiProperty({
		type: String,
		description: 'Users email',
		nullable: false,
		required: true
	})
	email?: null | string;

	@ApiProperty({
		type: AddressDto,
		description: 'Users address',
		nullable: false,
		required: true
	})
	address?: AddressDto;

	@ApiProperty({
		type: String,
		description: 'Users phone',
		nullable: false,
		required: true
	})
	phone?: null | string;

	@ApiProperty({
		type: String,
		description: 'Users webstite',
		nullable: true,
		required: false
	})
	website?: null | string;

	@ApiProperty({
		type: CompanyDto,
		description: 'Users company',
		nullable: true,
		required: false
	})
	company?: CompanyDto;
}
