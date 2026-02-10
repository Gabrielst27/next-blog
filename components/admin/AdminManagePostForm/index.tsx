'use client';

import { createPostAction } from '@/actions/post/create-post-action';
import { updatePostAction } from '@/actions/post/update-post-action';
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

type AdminManagePostFormUpdateProps = {
  mode: 'update';
  publicPost: PublicPostDto;
};
type AdminManagePostFormCreateProps = {
  mode: 'create';
};
type AdminManagePostFormProps =
  | AdminManagePostFormUpdateProps
  | AdminManagePostFormCreateProps;

export function AdminManagePostForm(props: AdminManagePostFormProps) {
  const { mode } = props;
  let publicPost;
  if (props.mode === 'update') {
    publicPost = props.publicPost;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,
  };

  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };

  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState,
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      state.errors.forEach((error) => toast.error(error));
    }
    if (state.errors.length <= 0) {
      toast.success('Post atualizado com sucesso');
    }
  }, [state.errors]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || '');

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          maxLength={36}
          name="id"
          labeltext={mode === 'create' ? '' : 'ID'}
          type={mode === 'create' ? 'hidden' : 'text'}
          value={publicPost ? publicPost.id : ''}
          readOnly
          disabled={isPending}
        ></InputText>
        <InputText
          maxLength={36}
          name="slug"
          labeltext={mode === 'create' ? '' : 'Slug'}
          type={mode === 'create' ? 'hidden' : 'text'}
          value={publicPost ? publicPost.slug : ''}
          readOnly
          disabled={isPending}
        ></InputText>
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
          disabled={isPending}
        />
        <InputText
          maxLength={32}
          labeltext="Autor"
          name="author"
          placeholder="Digite o nome do autor"
          defaultValue={formState.author}
          disabled={isPending}
        />
        <ImageUploader
          imageUrl={formState.coverImageUrl}
          disabled={isPending}
        />
        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textareaName="content"
          disabled={isPending}
        />
        <InputCheckbox
          name="published"
          labeltext="Publicar?"
          disabled={isPending}
        />
        {!!publicPost && (
          <Button variant="danger" type="button" disabled={isPending}>
            Excluir
          </Button>
        )}
        <Button type="submit" disabled={isPending}>
          Salvar
        </Button>
      </div>
    </form>
  );
}
