import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { BaseService } from './services/base.service';
import { BaseModelDto } from './models/base-model-dto';

export abstract class BaseBrowserController<
	TModel extends BaseModelDto
> {
	model?: TModel[] = [];

	abstract findAll(): Observable<AxiosResponse<TModel[]>>;

	constructor(public baseService: BaseService<TModel>) {}

	findDtoAll(): Observable<AxiosResponse<TModel[]>> {
		return this.baseService.findAll();
	}
}
