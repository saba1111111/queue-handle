import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { QueueModule } from 'libs/queue';

@Module({
  imports: [QueueModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthLibModule {}
