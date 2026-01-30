type AdminSinglePostPageProps = {
  params: Promise<{ id: string }>;
};

export async function AdminSinglePostContent({
  params,
}: AdminSinglePostPageProps) {
  const { id } = await params;
  return <div>Testando {id}</div>;
}
