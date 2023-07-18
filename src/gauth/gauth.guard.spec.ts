import { GauthGuard } from './gauth.guard';

describe('GauthGuard', () => {
  it('should be defined', () => {
    expect(new GauthGuard()).toBeDefined();
  });
});
