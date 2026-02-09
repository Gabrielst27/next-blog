'use client';

import { createPostAction } from '@/actions/post/create-post-action';
import { Button } from '@/components/Button';
import { ImageUploader } from '@/components/ImageUploader';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { MarkdownEditor } from '@/components/MarkdownEditor';
import {
  makePartialPublicPost,
  PublicPostDto,
} from '@/dto/post/public-post.dto';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface AdminManagePostFormProps {
  publicPost?: PublicPostDto;
}

export function AdminManagePostForm({ publicPost }: AdminManagePostFormProps) {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, createPost, isPending] = useActionState(
    createPostAction,
    initialState,
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      state.errors.forEach((error) => toast.error(error));
    }
  }, [state.errors]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action={createPost} className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          maxLength={32}
          labeltext="Título"
          name="title"
          placeholder="Digite o título"
          defaultValue={formState.title}
        />
        <InputText
          maxLength={32}
          labeltext="Excerto"
          name="excerpt"
          placeholder="Digite o resumo"
          defaultValue={formState.excerpt}
        />
        <InputText
          maxLength={32}
          labeltext="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          defaultValue={formState.author}
        />
        <ImageUploader imageUrl={formState.coverImageUrl} />
        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textareaName="content"
          disabled={false}
        />
        <InputCheckbox name="published" labeltext="Publicar?" />
        {!!publicPost && (
          <Button variant="danger" type="button">
            Excluir
          </Button>
        )}
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
