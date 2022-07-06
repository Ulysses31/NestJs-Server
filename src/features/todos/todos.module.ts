import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TodoService } from './service/todos.service';
import { TodosBrowserController } from './todos-browser/todos-browser.controller';
import { TodosEditorController } from './todos-editor/Todos-editor.controller';

@Module({
	imports: [HttpModule],
	controllers: [TodosBrowserController, TodosEditorController],
	providers: [TodoService]
})
export class TodoModule {}
