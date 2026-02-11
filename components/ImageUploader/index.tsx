'use client';

import clsx from 'clsx';
import { ClientLoadingSpinner } from '@/components/ClientLoadingSpinner';
import { Button } from '@/components/Button';
import { uploadImageAction } from '@/actions/upload/upload-image.action';
import { MAX_IMAGE_SIZE } from '@/lib/constants';
import { formatByteToMB } from '@/utils/format-byte';
import { Copy, ImageUpIcon } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type ImageUploaderProps = {
  disabled?: boolean;
  imageUrl?: string;
};

export function ImageUploader({
  imageUrl: prevImageUrl,
  disabled = false,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState(prevImageUrl || '');

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    setImgUrl('');
    if (!fileInputRef.current) {
      setImgUrl('');
      return;
    }
    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    if (!file) {
      setImgUrl('');
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error(
        `Imagem muito grande. Tamanho máximo permitido: ${formatByteToMB(MAX_IMAGE_SIZE)}MB`,
      );
      setImgUrl('');
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
        setImgUrl('');
        return;
      }
      setImgUrl(result.url);
      toast.success(result.successMessage);
    });
    fileInput.value = '';
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(imgUrl);
      toast.success('URL copiada para a área de transferência!');
    } catch (error) {
      toast.error('Erro ao copiar URL');
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        className="flex items-center gap-2"
        variant="ghost"
        type="button"
        onClick={handleChooseFile}
        disabled={isUploading || disabled}
      >
        <ImageUpIcon />
        Enviar imagem de capa
      </Button>
      <div className={clsx('flex flex-col gap-2')}>
        <div
          className={clsx(
            'h-100 w-full',
            'border border-slate-600 rounded-lg overflow-clip',
            'flex items-center justify-center',
          )}
        >
          {!!isUploading && <ClientLoadingSpinner />}
          {!imgUrl && !isUploading && <h3>Nenhuma imagem de capa.</h3>}
          {!!imgUrl && <img src={imgUrl} />}
        </div>
        <div
          className={clsx(
            'h-min-10 w-full p-2',
            'border border-slate-600 rounded-lg',
            'flex flex-col gap-2',
          )}
        >
          <div className="flex justify-between">
            <p className="font-bold">URL da imagem:</p>
            <Button
              onClick={handleCopy}
              variant="icon"
              type="button"
              aria-label="Copiar para a área de transferência"
            >
              <Copy className="w-4 h-full"></Copy>
            </Button>
          </div>
          <p>{imgUrl}</p>
          <input type="hidden" name="coverImageUrl" value={imgUrl} />
        </div>
      </div>
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
