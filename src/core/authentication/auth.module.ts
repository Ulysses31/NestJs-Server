import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './local.strategy';
import { Module } from '@nestjs/common';
import { UsersAuthModule } from './users-auth/users-auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtConstants } from './constants';
import { JwtRefreshStrategy } from './jwt-refresh.strategy';

@Module({
	imports: [
		PassportModule.register({}),
		JwtModule.register({}),
		UsersAuthModule
	],
	providers: [
		AuthService,
		LocalStrategy,
		JwtStrategy,
		JwtRefreshStrategy
	],
	exports: [AuthService]
})
export class AuthModule {}
