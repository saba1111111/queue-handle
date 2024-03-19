import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bull';
import { QueueConfigProvider } from './config';

@Module({
  imports: [BullModule.forRootAsync({ useClass: QueueConfigProvider })],
  providers: [QueueService],
  exports: [QueueService, BullModule],
})
export class QueueModule {}
