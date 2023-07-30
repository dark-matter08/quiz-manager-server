import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

import * as uaParser from 'ua-parser-js';
import * as geoip from 'geoip-lite';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req): any {
    const userAgent = req.headers['user-agent'];
    let ipAddress = req.ip;
    if (ipAddress.startsWith('::ffff:')) {
      ipAddress = ipAddress.replace('::ffff:', '');
    }
    const ua = uaParser(userAgent);
    const geo = geoip.lookup(ipAddress);

    const historyData = {
      userId: 1,
      ipAddress: ipAddress,
      deviceName: `${ua.device.vendor}-${ua.device.model}`,
      deviceOs: `${ua.os.name}-v${ua.os.version}`,
      userAgent: ua.ua,
      lat: geo?.ll[0] || null,
      lng: geo?.ll[1] || null,
    };
    console.log(historyData);

    return historyData;
  }

  @Get('/something')
  getSometing(): string {
    return this.appService.getSomething();
  }
}
