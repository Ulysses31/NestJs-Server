import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { IBaseService } from './base.service.interface';

const headers = {
	ContentType: 'json'
};

@Injectable()
export class BaseService<TModel> implements IBaseService<TModel> {
	private _apiUrl: string;

	constructor(public readonly httpService: HttpService) {}

	setApiUrl(url: string): void {
		this._apiUrl = url;
	}

	findAll(): Observable<AxiosResponse<TModel[]>> {
		return this.httpService.get<TModel[]>(this._apiUrl).pipe(
			tap((res) => console.log(res)),
			catchError((err) => {
				console.log(err);
				return of(err.response);
			}),
			map((res) => {
				var axiosResp: AxiosResponse<TModel[]> = {
					status: res.status,
					statusText: res.statusText,
					headers: res.headers,
					config: res.config,
					// request: res.request,
					data: res.data
				};
				Logger.log(
					`Status: ${res.status} - StatusText: ${res.statusText}`
				);
				return axiosResp;
			})
		);
	}

	findOne(id: number): Observable<AxiosResponse<TModel>> {
		return this.httpService.get<TModel>(`${this._apiUrl}/${id}`).pipe(
			tap((res) => console.log(res)),
			catchError((err) => {
				console.log(err);
				return of(err.response);
			}),
			map((res) => {
				var axiosResp: AxiosResponse<TModel> = {
					status: res.status,
					statusText: res.statusText,
					headers: res.headers,
					config: res.config,
					// request: res.request,
					data: res.data
				};
				Logger.log(
					`Status: ${res.status} - StatusText: ${res.statusText}`
				);
				return axiosResp;
			})
		);
	}

	create(dto: TModel): Observable<AxiosResponse<TModel>> {
		return this.httpService
			.post<TModel>(`${this._apiUrl}`, dto, { headers })
			.pipe(
				tap((res) => console.log(res)),
				catchError((err) => {
					console.log(err);
					return of(err.response);
				}),
				map((res) => {
					var axiosResp: AxiosResponse<TModel> = {
						status: res.status,
						statusText: res.statusText,
						headers: res.headers,
						config: res.config,
						// request: res.request,
						data: res.data
					};
					Logger.log(
						`Status: ${res.status} - StatusText: ${res.statusText}`
					);
					return axiosResp;
				})
			);
	}

	update(id: number, dto: TModel): Observable<AxiosResponse<TModel>> {
		return this.httpService
			.put<TModel>(`${this._apiUrl}/${id}`, dto, { headers })
			.pipe(
				tap((res) => console.log(res)),
				catchError((err) => {
					console.log(err);
					return of(err.response);
				}),
				map((res) => {
					var axiosResp: AxiosResponse<TModel> = {
						status: res.status,
						statusText: res.statusText,
						headers: res.headers,
						config: res.config,
						// request: res.request,
						data: res.data
					};
					Logger.log(
						`Status: ${res.status} - StatusText: ${res.statusText}`
					);
					return axiosResp;
				})
			);
	}

	remove(id: number): Observable<AxiosResponse<TModel>> {
		return this.httpService
			.delete<TModel>(`${this._apiUrl}/${id}`)
			.pipe(
				tap((res) => console.log(res)),
				catchError((err) => {
					console.log(err);
					return of(err.response);
				}),
				map((res) => {
					var axiosResp: AxiosResponse<TModel> = {
						status: res.status,
						statusText: res.statusText,
						headers: res.headers,
						config: res.config,
						// request: res.request,
						data: res.data
					};
					Logger.log(
						`Status: ${res.status} - StatusText: ${res.statusText}`
					);
					return axiosResp;
				})
			);
	}
}
