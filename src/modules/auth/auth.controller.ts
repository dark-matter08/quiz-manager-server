import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req): Promise<any> {
    return await this.authService.generateToken(req.user);
  }

  @Get('user')
  @UseGuards(JwtAuthGuard)
  async user(@Request() req): Promise<any> {
    return req.user;
  }
}
