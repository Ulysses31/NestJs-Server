import { JwtAuthGuard } from './core/authentication/jwt-auth.guard';
import { LocalAuthGuard } from './core/authentication/local-auth.guard';
import {
	Controller,
	Request,
	Post,
	UseGuards,
	Get,
	Body
} from '@nestjs/common';
import { AuthService } from './core/authentication/services/auth.service';
import { User } from './core/models/user-model-dto';

@Controller()
export class AppController {
	constructor(private authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('auth/login')
	async login(@Request() req) {
		return this.authService.login(req.user as User);
	}

	@UseGuards(JwtAuthGuard)
	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}

	@UseGuards(JwtAuthGuard)
	@Post('refresh-token')
	async refreshToken(
		@Request() req
	) {
		console.log(req.body);
		return this.authService.createAccessTokenFromRefreshToken(req.body.refresh_token);
	}
}
