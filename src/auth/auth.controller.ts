import { Controller, Post } from '@nestjs/common';
import { AuthService } from 'libs/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  public async register() {
    return this.authService.register();
  }
}
