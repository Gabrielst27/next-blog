export type PostSummaryDto = {
  postHeading?: 'h1' | 'h2' | 'h3';
  title: string;
  createdAt: string;
  excerpt: string;
  slug: string;
};
