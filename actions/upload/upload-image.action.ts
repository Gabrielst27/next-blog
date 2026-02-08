'use server';

import { ActionResult } from '@/dto/post/action-result.dto';
import {
  IMAGE_SERVER_URL,
  IMAGE_UPLOAD_DIRECTORY,
  MAX_IMAGE_SIZE,
} from '@/lib/constants';
import { extname, resolve } from 'path';
import { mkdir, writeFile } from 'fs/promises';
import { asyncDelay } from '@/utils/simulate-delay';

interface UploadImageResult extends ActionResult {
  url: string;
}

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadImageResult> {
  //TODO: Verificar login do usuário

  const makeResult = ({ url = '', error = '', successMessage = '' }) => ({
    url,
    error,
    successMessage,
  });

  if (!(formData instanceof FormData)) {
    return makeResult({ error: 'Dados inválidos' });
  }
  const file = formData.get('file');
  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo inválido' });
  }
  if (file.size > MAX_IMAGE_SIZE) {
    return makeResult({ error: 'Arquivo muito grande' });
  }
  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;
  const uploadFullPath = resolve(
    process.cwd(),
    'public',
    IMAGE_UPLOAD_DIRECTORY,
  );
  await mkdir(uploadFullPath, { recursive: true });
  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);
  const fileFullPath = resolve(uploadFullPath, uniqueImageName);
  await writeFile(fileFullPath, buffer);

  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  return makeResult({ url: url, successMessage: 'Imagem enviada' });
}
