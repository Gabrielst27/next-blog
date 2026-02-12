import { AdminLoginForm } from '@/components/admin/AdminLoginForm';
import { ErrorMessage } from '@/components/ErrorMessage';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Login',
};

export default function AdminLoginPage() {
  const allowLogin = Boolean(Number(process.env.ALLOW_LOGIN));

  if (!allowLogin) {
    return (
      <ErrorMessage
        contentTitle="403"
        content="Sistema em manutenção. Por favor, tente novamente mais tarde."
      />
    );
  }
  return (
    <section>
      <h1 className="font-bold text-2xl text-center">Olá, de novo!</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <AdminLoginForm />
      </Suspense>
    </section>
  );
}
