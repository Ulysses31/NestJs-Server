import { BaseModelDto } from './../core/models/base-model-dto';

export interface TodoDto extends BaseModelDto {
	id?: null | string;
	userId?: null | string;
	title?: null | string;
	completed: boolean;
}
