import { BaseModelDto } from './../core/models/base-model-dto';

export interface CommentDto extends BaseModelDto {
	id?: null | string;
	postId?: null | string;
	name?: null | string;
	email?: null | string;
	body?: null | string;
}
