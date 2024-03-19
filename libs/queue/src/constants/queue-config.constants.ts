export const QUEUE_CONFIG_CONSTANTS = {
  prefix: 'bull-queue',
  removeOnComplete: 10,
  backoff: { type: 'exponential', delay: 1000 },
  attempts: 3,
};
