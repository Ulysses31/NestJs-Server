import { ApiProperty } from '@nestjs/swagger';
import { BaseModelDto } from './../core/models/base-model-dto';

export class TodoDto extends BaseModelDto {
	@ApiProperty({
		type: String,
		description: 'ID',
		nullable: false,
		required: true
	})
	id?: null | string;

	@ApiProperty({
		type: String,
		description: 'Todo userId',
		nullable: false,
		required: true
	})
	userId?: null | string;

	@ApiProperty({
		type: String,
		description: 'Todo title',
		nullable: false,
		required: true
	})
	title?: null | string;

	@ApiProperty({
		type: Boolean,
		description: 'Todo completed',
		nullable: false,
		required: true
	})
	completed: boolean;
}
