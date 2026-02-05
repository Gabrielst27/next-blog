import { AdminManagePostForm } from '@/components/admin/AdminManagePostForm';

export default function AdminNewPostPage() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-8">Novo post</h1>
      <AdminManagePostForm></AdminManagePostForm>
    </section>
  );
}
