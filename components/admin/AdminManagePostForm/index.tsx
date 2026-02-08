'use client';

import { Button } from '@/components/Button';
import { ImageUploader } from '@/components/ImageUploader';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import { PublicPostDto } from '@/dto/post/public-post.dto';
import { useState } from 'react';

interface AdminManagePostFormProps {
  publicPost?: PublicPostDto | null;
}

export function AdminManagePostForm({
  publicPost = null,
}: AdminManagePostFormProps) {
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          maxLength={32}
          labeltext="Título"
          name="title"
          placeholder="Digite o título"
          defaultValue={publicPost?.title || ''}
        />
        <InputText
          maxLength={32}
          labeltext="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          defaultValue={publicPost?.excerpt || ''}
        />
        <InputText
          maxLength={32}
          labeltext="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          defaultValue={publicPost?.author || ''}
        />
        <ImageUploader imageUrl={publicPost?.coverImageUrl} />
        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textareaName="content"
          disabled={false}
        />
        <InputCheckbox name="published" labeltext="Publicar?" />
        {!!publicPost && <Button variant="danger">Excluir</Button>}
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
