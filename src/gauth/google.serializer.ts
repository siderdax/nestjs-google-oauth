import { PassportSerializer } from '@nestjs/passport';

export class GoogleSerializer extends PassportSerializer {
  serializeUser(user: any, done: Function) {
    process.nextTick(function () {
      done(null, { id: user.id, name: user.name });
    });
  }
  deserializeUser(payload: any, done: Function) {
    process.nextTick(function () {
      return done(null, payload);
    });
  }
}
