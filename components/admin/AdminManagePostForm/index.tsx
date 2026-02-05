'use client';

import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { useState } from 'react';

export function AdminManagePostForm() {
  const [contentValue, setContentValue] = useState('');

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          maxLength={32}
          labeltext="Título"
          placeholder="Digite o título do post"
        />
        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textareaName="content"
          value={contentValue}
          setValue={setContentValue}
        />
        <InputCheckbox labeltext="Publicar ao salvar" />
        <div className="flex justify-around">
          <Button type="submit" variant="danger">
            Cancelar
          </Button>
          <Button type="submit">Salvar</Button>
        </div>
      </div>
    </form>
  );
}
