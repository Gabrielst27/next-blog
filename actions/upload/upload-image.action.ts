'use server';

import { ActionResult } from '@/dto/post/action-result.dto';
import { extname, resolve } from 'path';
import { mkdir, writeFile } from 'fs/promises';

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
  const uploadMaxSize =
    Number(process.env.NEXT_PUBLIC_MAX_IMAGE_SIZE) || 1048576;
  if (file.size > uploadMaxSize) {
    return makeResult({ error: 'Arquivo muito grande' });
  }
  if (!file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida' });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const uploadDir = process.env.IMAGE_UPLOAD_DIRECTORY || 'uploads';
  const uploadFullPath = resolve(process.cwd(), 'public', uploadDir);
  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);
  const fileFullPath = resolve(uploadFullPath, uniqueImageName);
  await writeFile(fileFullPath, buffer);

  const imageServerUrl =
    process.env.IMAGE_SERVER_URL || 'http://localhost:3000/uploads';
  const url = `${imageServerUrl}/${uniqueImageName}`;

  return makeResult({ url: url, successMessage: 'Imagem enviada' });
}
