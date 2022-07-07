import { LocalAuthGuard } from './core/authentication/local-auth.guard';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
	constructor() {}

	@UseGuards(LocalAuthGuard)
	@Post('auth/login')
	async login(@Request() req) {
		return req.user;
	}
}
