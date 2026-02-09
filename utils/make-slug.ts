import slugify from 'slugify';

export function makeSlug(title: string): string {
  const slug = slugify(title, {
    lower: true,
    strict: true,
    trim: true,
  });
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${slug}-${randomString}`;
}
