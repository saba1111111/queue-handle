import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { QUEUES } from '../constants';
import { Job } from 'bull';
import { ISendEmailProcessData } from '../interfaces';
import { MailSenderService } from 'libs/mail';

@Processor(QUEUES.SEND_EMAIL)
export class MailSendingConsumer {
  constructor(private readonly mailSendingService: MailSenderService) {}

  @Process()
  async sendEmail(job: Job<ISendEmailProcessData>) {
    return this.mailSendingService.sendMessage(
      job.data.to,
      job.data.subject,
      job.data.text
    );
  }

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`
    );
  }
}
