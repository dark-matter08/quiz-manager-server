import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import * as uaParser from 'ua-parser-js';
import * as geoip from 'geoip-lite';
@ApiTags('Authentication Endpoints')
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
    const ua = uaParser(req.headers['user-agent']);
    const ipAddress = req.ip;
    const geo = geoip.lookup(ipAddress);

    return {
      ua,
      ip_address: ipAddress,
      geo,
    };

    return req.user;
  }
}
