import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
	Logger
} from '@nestjs/common';
import { Observable, tap, map } from 'rxjs';

@Injectable()
export class TimeInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler
	): Observable<any> {
		Logger.log('Before...');

		const now = Date.now();

		return next.handle().pipe(
			tap((res) => {
				const tm = Date.now() - now;
				res.executionTime = `${tm}ms`;
				Logger.log(`After... ${tm}ms`);
			})
		);
	}
}
