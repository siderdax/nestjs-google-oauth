import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'badgoose',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.authenticate('session'));

  await app.listen(4000);
}
bootstrap();
