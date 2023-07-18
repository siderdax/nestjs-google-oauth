import { PassportStrategy } from '@nestjs/passport';
import { OAuth2Strategy } from 'passport-google-oauth';

require('dotenv').config();

export class GoogleOAuthStrategy extends PassportStrategy(OAuth2Strategy) {
  constructor() {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://cola053.asuscomm.com:4000/gauth/login',
      scope: ['profile'],
      // authorizationURL?: string | undefined,
      // tokenURL?: string | undefined,
      // userProfileURL?: string | undefined,
      // accessType?: string | undefined,
      // approval_prompt?: string | undefined,
      // prompt?: string | undefined,
      // loginHint?: string | undefined,
      // userID?: string | undefined,
      // hostedDomain?: string | undefined,
      // display?: string | undefined,
      // requestVisibleActions?: string | undefined,
      // openIDRealm?: string | undefined,
    });
  }

  async validate(
    accessToken: any,
    refreshToken: any,
    profile: any,
    cb: (error: any, user: any) => any,
  ): Promise<any> {
    return { id: profile.id, name: profile.displayName };
  }
}
