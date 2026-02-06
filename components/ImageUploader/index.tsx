'use client';

import { uploadImageAction } from '@/actions/upload/upload-image.action';
import { Button } from '@/components/Button';
import { MAX_IMAGE_SIZE } from '@/lib/constants';
import { formatByteToMB } from '@/utils/format-byte';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

type ImageUploaderProps = {};

export function ImageUploader({}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error(
        `Imagem muito grande. Tamanho máximo permitido: ${formatByteToMB(MAX_IMAGE_SIZE)}MB`,
      );
      fileInput.value = '';
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    //TODO - Add action to send image to the server
    startTransition(async () => {
      const result = await uploadImageAction(formData);
      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        return;
      }
      toast.success(result.successMessage);
    });
    fileInput.value = '';
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="flex items-center gap-2"
        variant="ghost"
        type="button"
        onClick={handleChooseFile}
      >
        <ImageUpIcon />
        Enviar imagem de capa
      </Button>
      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
}
