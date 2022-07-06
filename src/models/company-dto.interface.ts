import { BaseModelDto } from 'src/core/models/base-model-dto';

export interface CompanyDto extends BaseModelDto {
	id?: null | string;
	name?: null | string;
	catchPhrase?: null | string;
	bs?: null | string;
}
