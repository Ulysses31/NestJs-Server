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
		.setTitle(process.env.SWAGGER_OPENAPI_TITLE)
		.setDescription(process.env.SWAGGER_OPENAPI_DESCRIPTION)
		.setVersion(process.env.SWAGGER_OPENAPI_VERSION)
		.setContact(
			process.env.SWAGGER_OPENAPI_AUTHOR,
			process.env.SWAGGER_OPENAPI_WEBSITE,
			process.env.SWAGGER_OPENAPI_CONTACT
		)
		.setLicense('MIT', '')
		.addServer(`http://${process.env.APP_URL}:${process.env.APP_PORT}`)
		.addServer(`https://${process.env.APP_URL}:${process.env.APP_PORT}`)
		// .addSecurity('basic', {
		// 	type: 'http',
		// 	scheme: 'basic'
		// })
		// .addBasicAuth()
		.addBearerAuth()
		.build();

	const customOptions: SwaggerCustomOptions = {
		swaggerOptions: {
			persistAuthorization: true
		},
		customSiteTitle: process.env.SWAGGER_OPENAPI_TAB_TITLE
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
	await app.listen(process.env.APP_PORT);
	console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
