'use server';

import { deleteLoginSession } from '@/lib/login/manage-login';
import { asyncDelay } from '@/utils/simulate-delay';

export async function logoutAction() {
  await asyncDelay(3000);
  await deleteLoginSession();
}
