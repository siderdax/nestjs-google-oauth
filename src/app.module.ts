import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GauthModule } from './gauth/gauth.module';

@Module({
  imports: [GauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
