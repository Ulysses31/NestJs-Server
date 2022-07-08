import { PostModule } from './features/posts/posts.module';
import { CommentModule } from './features/comments/comments.module';
import { PhotoModule } from './features/photos/photos.module';
import { TodoModule } from './features/todos/todos.module';
import { UserModule } from './features/users/users.module';
import { BaseService } from './core/services/base.service';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';
import { DbMiddleware } from './core/db.middleware';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './core/authentication/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env'
		}),
		HttpModule,
		AuthModule,
		TodoModule,
		PhotoModule,
		CommentModule,
		UserModule,
		PostModule
	],
	controllers: [AppController],
	providers: [BaseService]
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer
			.apply(DbMiddleware)
			.forRoutes('comments', 'posts', 'photos', 'todos', 'users');
	}
}
