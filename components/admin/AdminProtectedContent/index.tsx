import { requireLoginSessionOrRedirect } from '@/lib/login/manage-login';

type AdminProtectedContentProps = {
  children: React.ReactNode;
};

export async function AdminProtectedContent({
  children,
}: AdminProtectedContentProps) {
  await requireLoginSessionOrRedirect();
  return <>{children}</>;
}
