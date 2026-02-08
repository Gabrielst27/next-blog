import { randomUUID } from 'crypto';

interface PostFactoryProps {
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  published: boolean;
  author: string;
}

export class PostFactoryDto {
  private readonly _id: string;
  private readonly _slug: string;
  private readonly _createdAt: string;
  private _updatedAt: string;
  constructor({ ...props }: PostFactoryProps) {
    this._id = randomUUID();
    this._slug = PostFactoryDto.generateSlug(props.title);
    this._createdAt = new Date().toISOString();
    this._updatedAt = new Date().toISOString();
  }

  static generateSlug(title: string): string {
    return title.toLowerCase().replaceAll(' ', '-');
  }
}
