import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserService } from './service/users.service';
import { UsersBrowserController } from './users-browser/users-browser.controller';
import { UsersEditorController } from './users-editor/users-editor.controller';

@Module({
	imports: [HttpModule],
	controllers: [UsersBrowserController, UsersEditorController],
	providers: [UserService]
})
export class UserModule {}
