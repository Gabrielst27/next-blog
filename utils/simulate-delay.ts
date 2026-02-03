import { formatLog } from '@/utils/format-log';

export async function simulateDelay(
  delay: number = 2000,
  verbose: boolean = false,
) {
  if (delay <= 0) return;
  if (verbose) {
    formatLog(`Delaying for ${delay / 1000} seconds`);
  }
  await new Promise((resolve) => setTimeout(resolve, delay));
}
