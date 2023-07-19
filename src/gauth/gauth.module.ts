import { GoogleOAuthStrategy } from './google.strategy';
import { Module } from '@nestjs/common';
import { GauthService } from './gauth.service';
import { PassportModule } from '@nestjs/passport';
import { GoogleSerializer } from './google.serializer';

@Module({
  imports: [PassportModule],
  providers: [GauthService, GoogleOAuthStrategy, GoogleSerializer],
})
export class GauthModule {}
