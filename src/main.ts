import { TimeInterceptor } from './core/time.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import {
	DocumentBuilder,
	SwaggerCustomOptions,
	SwaggerDocumentOptions,
	SwaggerModule
} from '@nestjs/swagger';

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

	app.use(cookieParser());

	// swagger openapi
	const config = new DocumentBuilder()
		.setTitle('NestJs Server API')
		.setDescription('The NestJs Server API description')
		.setVersion('1.0')
		.setContact(
			'Iordanidis Chris',
			'datacenter.com',
			'info@datacenter.com'
		)
		.setLicense('MIT', '')
		.addServer('http://localhost:3000')
		.addServer('https://localhost:3000')
		// .addSecurity('basic', {
		// 	type: 'http',
		// 	scheme: 'basic'
		// })
		// .addBasicAuth()
		.build();

	const customOptions: SwaggerCustomOptions = {
		swaggerOptions: {
			persistAuthorization: true
		},
		customSiteTitle: 'NestJs Server API'
	};

	const docOptions: SwaggerDocumentOptions = {
		ignoreGlobalPrefix: true,
		operationIdFactory: (controllerKey: string, methodKey: string) =>
			methodKey
	};

	const document = SwaggerModule.createDocument(
		app,
		config,
		docOptions
	);
	SwaggerModule.setup('api', app, document, customOptions);
	await app.listen(3000);
	console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
