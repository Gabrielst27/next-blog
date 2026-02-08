import { AdminManagePostForm } from '@/components/admin/AdminManagePostForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criar post',
};

export default function AdminNewPostPage() {
  return (
    <section className="p-4 flex flex-col gap-8">
      <h1 className="text-xl text-center font-bold">Criar Post</h1>
      <AdminManagePostForm></AdminManagePostForm>
    </section>
  );
}
