type AdminPostContentProps = {
  params: Promise<{ id: string }>;
};

export async function AdminPostContent({ params }: AdminPostContentProps) {
  const { id } = await params;
  return <div>Testando {id}</div>;
}
