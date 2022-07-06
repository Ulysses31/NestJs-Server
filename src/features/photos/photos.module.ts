import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PhotoService } from './service/Photos.service';
import { PhotosBrowserController } from './photos-browser/Photos-browser.controller';
import { PhotosEditorController } from './photos-editor/photos-editor.controller';

@Module({
	imports: [HttpModule],
	controllers: [PhotosBrowserController, PhotosEditorController],
	providers: [PhotoService]
})
export class PhotoModule {}
