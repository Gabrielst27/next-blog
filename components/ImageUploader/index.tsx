'use client';

import { Button } from '@/components/Button';
import { ErrorMessageComponent } from '@/components/ErrorMessage';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

type ImageUploaderProps = {};

export function ImageUploader({}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  }

  function handleChange() {
    if (!fileInputRef.current) return;
    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    if (!file) return;
    if (file.size > 1000000) {
      toast.error('Imagem muito grande. Tamanho máximo: 1MB');
      fileInput.value = '';
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData.get('file'));
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
