import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

export interface IBaseService<TModel> {
	setApiUrl(url: string): void;
	findAll(): Observable<AxiosResponse<TModel[]>>;
	findOne(id: number): Observable<AxiosResponse<TModel>>;
	create(dto: TModel): Observable<AxiosResponse<TModel>>;
	update(id: number, dto: TModel): Observable<AxiosResponse<TModel>>;
	remove(id: number): Observable<AxiosResponse<TModel>>;
}
