import {
  BullRootModuleOptions,
  SharedBullConfigurationFactory,
} from '@nestjs/bull';
import { QUEUE_CONFIG_CONSTANTS } from '../constants';

export class QueueConfigProvider implements SharedBullConfigurationFactory {
  createSharedConfiguration():
    | BullRootModuleOptions
    | Promise<BullRootModuleOptions> {
    const { prefix, removeOnComplete, backoff, attempts } =
      QUEUE_CONFIG_CONSTANTS;

    return {
      redis: { host: 'redis', port: 6379 },
      prefix,
      defaultJobOptions: {
        backoff,
        attempts,
        removeOnComplete,
      },
    };
  }
}
