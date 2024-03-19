import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { QUEUES } from 'libs/queue/constants';
import { SendOtpCredentials } from './interfaces';
import { ISendEmailProcessData } from 'libs/queue/interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectQueue(QUEUES.SEND_EMAIL)
    private mailSendingQueue: Queue
  ) {}

  public async register() {
    // Registration staff
    await this.sendVerificationCode({
      to: 'sabapachulia123@gmail.com',
      code: '5555',
    });
    return { message: 'Successfully Register!' };
  }

  public async sendVerificationCode(credentials: SendOtpCredentials) {
    const { code, to } = credentials;

    return this.mailSendingQueue.add({
      text: code,
      subject: 'OTP CODE.',
      to,
    } as ISendEmailProcessData);
  }
}
