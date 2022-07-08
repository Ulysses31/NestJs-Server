import { ApiProperty } from '@nestjs/swagger';
import { BaseModelDto } from './../core/models/base-model-dto';

export class PhotoDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Photo albumId',
		nullable: false,
		required: true
	})
	albumId?: null | string;

	@ApiProperty({
		type: String,
		description: 'Photo title',
		nullable: false,
		required: true
	})
	title?: null | string;

	@ApiProperty({
		type: String,
		description: 'Photo url',
		nullable: false,
		required: true
	})
	url?: null | string;

	@ApiProperty({
		type: String,
		description: 'Photo thumbnailUrl',
		nullable: false,
		required: true
	})
	thumbnailUrl?: null | string;
}
