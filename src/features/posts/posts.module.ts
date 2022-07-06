import { PostService } from './service/posts.service';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostsBrowserController } from './posts-browser/Posts-browser.controller';
import { PostsEditorController } from './posts-editor/posts-editor.controller';

@Module({
	imports: [HttpModule],
	controllers: [PostsBrowserController, PostsEditorController],
	providers: [PostService]
})
export class PostModule {}
