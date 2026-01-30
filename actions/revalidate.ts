'use server';

import { revalidateTag } from 'next/cache';

export async function revalidateAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Revalidate Action em', path);

  // revalidatePath(path.toString());
  revalidateTag('formatCurrentHourCached', 'max');
}
