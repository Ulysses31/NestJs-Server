import { AuthService } from './services/auth.service';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { UsersAuthModule } from './users-auth/users-auth.module';
import { PassportModule } from '@nestjs/passport';
import { UsersAuthService } from './users-auth/services/users-auth.service';

@Module({
	imports: [UsersAuthModule, PassportModule],
	providers: [AuthService, UsersAuthService, LocalStrategy]
})
export class AuthModule {}
