import { ApiProperty } from '@nestjs/swagger';
import { BaseModelDto } from './../core/models/base-model-dto';

export class PostDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Post userId',
		nullable: false,
		required: true
	})
	userId?: null | string;

	@ApiProperty({
		type: String,
		description: 'Post title',
		nullable: false,
		required: true
	})
	title?: null | string;

	@ApiProperty({
		type: String,
		description: 'Post body',
		nullable: false,
		required: true
	})
	body?: null | string;
}
