'use server';

import {
  makePartialPublicPost,
  PublicPostDto,
} from '@/dto/post/public-post.dto';
import { verifyLoginSession } from '@/lib/login/manage-login';
import { PostCreateSchema } from '@/lib/posts/validation';
import { drizzlePostRepository } from '@/repositories/post/drizzle-post.repository';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { makeSlug } from '@/utils/make-slug';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuidV4 } from 'uuid';

interface CreatePostActionState {
  formState: PublicPostDto;
  errors: string[];
  success?: string;
}

export async function createPostAction(
  previousState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  const isAuthenticated = await verifyLoginSession();

  if (!(formData instanceof FormData)) {
    return {
      formState: previousState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataObject = Object.fromEntries(formData.entries());
  const zodParsedObject = PostCreateSchema.safeParse(formDataObject);

  if (!isAuthenticated) {
    return {
      formState: makePartialPublicPost(formDataObject),
      errors: ['Faça login em outra aba antes de salvar'],
    };
  }

  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error);
    return {
      formState: makePartialPublicPost(formDataObject),
      errors,
    };
  }

  const validPostData = zodParsedObject.data;
  const now = new Date().toISOString();
  const newPost = {
    ...validPostData,
    createdAt: now,
    updatedAt: now,
    slug: makeSlug(validPostData.title),
    id: uuidV4(),
  };

  try {
    await drizzlePostRepository.create(newPost);
    revalidateTag('posts', 'max');
    revalidateTag('posts-admin', 'max');
  } catch (e) {
    if (e instanceof Error) {
      return {
        formState: newPost,
        errors: [e.message],
      };
    }
    return {
      formState: newPost,
      errors: ['[ERR-003]: Por favor, contate o suporte'],
    };
  }

  redirect(`/admin/post/${newPost.id}?created=1`);
}
