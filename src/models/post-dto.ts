import { BaseModelDto } from './../core/models/base-model-dto';

export interface PostDto extends BaseModelDto {
	id?: null | string;
	userId?: null | string;
	title?: null | string;
	body?: null | string;
}
