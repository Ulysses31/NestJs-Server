import { GeoDto } from './geo.dto';
import { BaseModelDto } from 'src/core/models/base-model-dto';
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Address name',
		nullable: false,
		required: true
	})
	street?: null | string;

	@ApiProperty({
		type: String,
		description: 'Address suite',
		nullable: false,
		required: true
	})
	suite?: null | string;

	@ApiProperty({
		type: String,
		description: 'Address city',
		nullable: false,
		required: true
	})
	city?: null | string;

	@ApiProperty({
		type: String,
		description: 'Address zipcode',
		nullable: false,
		required: true
	})
	zipcode?: null | string;

	@ApiProperty({
		type: GeoDto,
		description: 'Address geo',
		nullable: true,
		required: false
	})
	geo?: GeoDto;
}
