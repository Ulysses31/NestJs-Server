import { Module } from '@nestjs/common';
import { UsersAuthService } from './services/users-auth.service';

@Module({
	providers: [UsersAuthService],
	exports: [UsersAuthService]
})
export class UsersAuthModule {}
