import { ApiProperty } from '@nestjs/swagger';
import { BaseModelDto } from 'src/core/models/base-model-dto';

export class GeoDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Geo lat',
		nullable: true,
		required: false
	})
	lat?: null | string;

	@ApiProperty({
		type: String,
		description: 'Geo lng',
		nullable: true,
		required: false
	})
	lng?: null | string;
}
