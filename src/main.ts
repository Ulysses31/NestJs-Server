import { TimeInterceptor } from './core/time.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		abortOnError: false,
		logger: ['error', 'warn', 'debug', 'verbose', 'log']
	});
	app.useGlobalInterceptors(new TimeInterceptor());
	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: '1'
	});
	await app.listen(3000);
}
bootstrap();
