import { ApiProperty } from '@nestjs/swagger';
import { BaseModelDto } from './../core/models/base-model-dto';

export class CommentDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments postId',
		nullable: false,
		required: true
	})
	postId?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments name',
		nullable: false,
		required: true
	})
	name?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments email',
		nullable: false,
		required: true
	})
	email?: null | string;

	@ApiProperty({
		type: String,
		description: 'Comments body',
		nullable: false,
		required: true
	})
	body?: null | string;
}
