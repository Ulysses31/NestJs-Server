import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { BaseModelDto } from './models/base-model-dto';
import { BaseService } from './services/base.service';

export abstract class BaseEditorController<
	TModel extends BaseModelDto
> {
	model?: TModel;

	abstract findById(id: number): Observable<AxiosResponse<TModel>>;
	abstract newDto(dto: TModel): Observable<AxiosResponse<TModel>>;
	abstract updateDto(
		id: number,
		dto: TModel
	): Observable<AxiosResponse<TModel>>;
	abstract deleteDto(id: number): Observable<AxiosResponse<TModel>>;

	constructor(public baseService: BaseService<TModel>) {}

	findDtoById(id: number): Observable<AxiosResponse<TModel>> {
		return this.baseService.findOne(id);
	}

	insertNewDto(dto: TModel): Observable<AxiosResponse<TModel>> {
		return this.baseService.create(dto);
	}

	modifyDto(
		id: number,
		dto: TModel
	): Observable<AxiosResponse<TModel>> {
		return this.baseService.update(id, dto);
	}

	removeDto(id: number): Observable<AxiosResponse<TModel>> {
		return this.baseService.remove(id);
	}
}
