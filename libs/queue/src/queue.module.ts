import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { QueueConfigProvider } from './config';
import { QUEUES } from './constants';
import { MailModule } from 'libs/mail';
import { MailSendingConsumer } from './consumers';

@Module({
  imports: [
    MailModule,
    BullModule.forRootAsync({ useClass: QueueConfigProvider }),
    BullModule.registerQueue({ name: QUEUES.SEND_EMAIL }),
  ],
  providers: [MailSendingConsumer],
  exports: [BullModule],
})
export class QueueModule {}
