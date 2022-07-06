import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CommentService } from './service/comments.service';
import { CommentsBrowserController } from './comments-browser/Comments-browser.controller';
import { CommentsEditorController } from './comments-editor/comments-editor.controller';

@Module({
	imports: [HttpModule],
	controllers: [CommentsBrowserController, CommentsEditorController],
	providers: [CommentService]
})
export class CommentModule {}
