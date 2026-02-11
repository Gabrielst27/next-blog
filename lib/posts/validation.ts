import z from 'zod';
import sanitizeHtml from 'sanitize-html';
import { isUrlOrRelativePath } from '@/utils/ir-url-or-relative-path';

const PostBaseSchema = z.object({
  title: z
    .string('Formato de título inválido')
    .trim()
    .min(3, 'O título deve conter, no mínimo, 3 caracteres')
    .max(128, 'O título deve conter, no máximo, 128 caracteres'),
  excerpt: z
    .string('Formato de excerto inválido')
    .trim()
    .min(3, 'O excerto deve conter, no mínimo, 3 caracteres')
    .max(128, 'O excerto deve conter, no máximo, 128 caracteres'),
  content: z
    .string('Formato de conteúdo inválido')
    .trim()
    .min(16, 'Conteúdo deve ter, no mínimo, 16 caracteres')
    .transform((val) => sanitizeHtml(val)),
  author: z
    .string('Formato de nome de autor inválido')
    .trim()
    .min(3, 'O nome do autor deve conter, no mínimo, 3 caracteres')
    .max(64, 'O nome do autor deve conter, no máximo, 64 caracteres'),
  coverImageUrl: z
    .string('Formato de url inválido')
    .trim()
    .refine(isUrlOrRelativePath, {
      message:
        'URL da imagem de capa deve ser uma URL ou caminho para a imagem',
    }),
  published: z
    .union(
      [
        z.literal('on'),
        z.literal('true'),
        z.literal('false'),
        z.literal(true),
        z.literal(false),
        z.literal(null),
        z.literal(undefined),
      ],
      'Valor de entrada inválido no campo de publicação',
    )
    .default(false)
    .transform((val) => val === 'on' || val === 'true' || val === true),
});

export const PostCreateSchema = PostBaseSchema;

export const PostUpdateSchema = PostBaseSchema.extend({});
