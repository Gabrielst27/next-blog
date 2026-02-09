'use server';

import {
  makePartialPublicPost,
  PublicPostDto,
} from '@/dto/post/public-post.dto';
import { PostCreateSchema } from '@/lib/posts/validation';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { makeSlug } from '@/utils/make-slug';
import { v4 as uuidV4 } from 'uuid';

interface CreatePostActionState {
  formState: PublicPostDto;
  errors: string[];
}

export async function createPostAction(
  previousState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> {
  //TODO: verificar login
  if (!(formData instanceof FormData)) {
    return {
      formState: previousState.formState,
      errors: ['Dados inválidos'],
    };
  }

  const formDataObject = Object.fromEntries(formData.entries());
  const zodParsedObject = PostCreateSchema.safeParse(formDataObject);

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

  return {
    formState: newPost,
    errors: [],
  };
}
