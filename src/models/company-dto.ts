import { ApiProperty } from '@nestjs/swagger';
import { BaseModelDto } from 'src/core/models/base-model-dto';

export class CompanyDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Company name',
		nullable: false,
		required: true
	})
	name?: null | string;

	@ApiProperty({
		type: String,
		description: 'Company catchPhrase',
		nullable: false,
		required: true
	})
	catchPhrase?: null | string;

	@ApiProperty({
		type: String,
		description: 'Company bs',
		nullable: false,
		required: true
	})
	bs?: null | string;
}
