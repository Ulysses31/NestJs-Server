import { ConfigService } from '@nestjs/config';
import {
	HttpException,
	HttpStatus,
	Injectable,
	Logger,
	UnauthorizedException
} from '@nestjs/common';
import { UsersAuthService } from '../users-auth/services/users-auth.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/models/user-model-dto';

@Injectable()
export class AuthService {
	constructor(
		private confService: ConfigService,
		private usersService: UsersAuthService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, pass: string): Promise<any> {
		const user = await this.usersService.findOne(username);
		if (user && user.password === pass) {
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

	async login(user: User) {
		const payload = { username: user.username, sub: user.id };
		
		var accToken: string = this.jwtService.sign(payload, {
			secret: this.confService.get('JWT_TOKEN_SECRET'),
			expiresIn: this.confService.get('JWT_TOKEN_EXP_H'),
		});
		
		var refrToken: string = this.jwtService.sign(payload, {
			secret: this.confService.get('JWT_REFRESH_TOKEN_SECRET'),
			expiresIn: this.confService.get('JWT_REFRESH_TOKEN_EXP_H')
		});

		//var usr = this.usersService.findOne(payload.username);
		var usr = await this.usersService.updateUsersTokens(
			payload.sub,
			accToken,
			refrToken
		);			
		
		return {
			access_token: {
				token: accToken,
				expiresIn: this.confService.get('JWT_TOKEN_EXP_H')
			},
			refresh_token: {
				token: refrToken,
				expiresIn: this.confService.get('JWT_REFRESH_TOKEN_EXP_H')
			},
			user: {
				id: usr.id,
				username: usr.username,
				email: usr.email
			}
		};
	}

	async createAccessTokenFromRefreshToken(refreshToken: string) {
		try {
			const decoded = this.jwtService.decode(refreshToken) as User;

			if (!decoded) {
				throw new Error();
			}

			const user: User = await this.usersService.findOne(decoded.username);

			if (!user) {
				throw new HttpException(
					'User with this id does not exist',
					HttpStatus.NOT_FOUND
				);
			}

			const isRefreshTokenMatching = (refreshToken === user.refresh_token);

			if (!isRefreshTokenMatching) {
				throw new UnauthorizedException('Invalid Token');
			}

			await this.jwtService.verifyAsync(
				refreshToken,
				{
					secret: this.confService.get('JWT_TOKEN_SECRET')
				}
			);

			return this.login(user);
		} catch (e) {
			Logger.log(e.message);
			throw new UnauthorizedException('Invalid Token');
		}
	}

	async saveRefreshToken(refreshToken: string, userId: number) {
		// const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
		// save to db
	}

}
