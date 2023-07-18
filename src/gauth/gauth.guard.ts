import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { nextTick } from 'process';
import { Observable } from 'rxjs';

@Injectable()
export class GauthGuard extends AuthGuard('google') implements CanActivate {
  canActivate(context: ExecutionContext) {
    if (context.switchToHttp().getRequest().user) return true;
    return super.canActivate(context);
  }
}
