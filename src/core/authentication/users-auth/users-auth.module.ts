import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsersAuthService } from './services/users-auth.service';

@Module({
	providers: [UsersAuthService],
	exports: [UsersAuthService]
})
export class UsersAuthModule {}
