'use client';

import { Button } from '@/components/Button';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';

type ImageUploaderProps = {};

export function ImageUploader({}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleChooseFile() {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
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
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
}
