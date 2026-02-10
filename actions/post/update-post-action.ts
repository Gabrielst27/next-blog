'use server';

import {
  makePartialPublicPost,
  PublicPostDto,
} from '@/dto/post/public-post.dto';
import { PostUpdateSchema } from '@/lib/posts/validation';
import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { makeSlug } from '@/utils/make-slug';
import { revalidateTag } from 'next/cache';

interface UpdatePostActionState {
  formState: PublicPostDto;
  errors: string[];
  success?: string;
}

export async function updatePostAction(
  prevState: UpdatePostActionState,
  formData: FormData,
): Promise<UpdatePostActionState> {
  //TODO: verificar login do usuário
  if (!(formData instanceof FormData)) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }
  const id = formData.get('id')?.toString();
  if (!id) {
    return {
      formState: prevState.formState,
      errors: ['Dados inválidos'],
    };
  }
  const formDataObject = Object.fromEntries(formData.entries());
  const zodParsedObject = PostUpdateSchema.safeParse(formDataObject);

  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error);
    return {
      formState: makePartialPublicPost(formDataObject),
      errors,
    };
  }

  const validData = zodParsedObject.data;

  try {
    const newPost = await drizzlePostRepository.update(id, validData);
    revalidateTag('posts', 'max');
    revalidateTag('posts-admin', 'max');
    revalidateTag(`post-${newPost.slug}`, 'max');
    revalidateTag(`posts-admin-${newPost.id}`, 'max');
    return {
      formState: newPost,
      errors: [],
      success: makeSlug(newPost.updatedAt),
    };
  } catch (e) {
    if (e instanceof Error) {
      return {
        formState: makePartialPublicPost(validData),
        errors: [e.message],
      };
    }
    return {
      formState: makePartialPublicPost(validData),
      errors: ['[ERR-007]: Erro desconhecido'],
    };
  }
}
