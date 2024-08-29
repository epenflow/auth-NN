import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { Account } from 'src/account/entities/account.entity';
import { LoginAuthDto } from 'src/auth/dto/login-auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	async register(@Body() createAuthDto: CreateAuthDto): Promise<Account> {
		return await this.authService.register(createAuthDto);
	}
	@Post('login')
	async login(@Body() loginAuthDto: LoginAuthDto) {
		return await this.authService.login(loginAuthDto);
	}
}