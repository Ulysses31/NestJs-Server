import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConstants } from './constants';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
	Strategy,
	'jwt-refresh-token'
) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
			ignoreExpiration: false,
			secretOrKey: JwtConstants.refresh_token_secret
		});
	}

	async validate(payload: any) {
		return { userId: payload.sub, username: payload.username };
	}
}
