'use server';

import { formatLog } from '@/utils/format-log';

export async function deletePostAction(id: string) {
  formatLog('' + id);
}
