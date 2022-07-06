import { TimeInterceptor } from './core/time.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		abortOnError: false,
		logger: ['error', 'warn', 'debug', 'verbose', 'log']
	});
	app.useGlobalInterceptors(new TimeInterceptor());
	await app.listen(3000);
}
bootstrap();
