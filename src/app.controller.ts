import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { GauthGuard } from './gauth/gauth.guard';
import { kStringMaxLength } from 'buffer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(GauthGuard)
  @Get('gauth/login')
  googleLogin(@Req() req: any, @Res() res: any): string {
    return req.logIn(req.user, function (err: Function) {
      if (err) {
        return process.nextTick(err);
      }

      return res.redirect('/');
    });
  }

  @UseGuards(GauthGuard)
  @Get()
  hello(@Req() req: any): string {
    return JSON.stringify(req.user);
  }
}
