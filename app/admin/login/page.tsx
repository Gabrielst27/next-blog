import { AdminLoginForm } from '@/components/admin/AdminLoginForm';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Login',
};

export default function AdminLoginPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl text-center">Olá, de novo!</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <AdminLoginForm />
      </Suspense>
    </section>
  );
}
