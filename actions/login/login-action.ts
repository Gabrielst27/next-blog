'use server';

import { createLoginSession, verifyPassword } from '@/lib/login/manage-login';
import { asyncDelay } from '@/utils/simulate-delay';
import { redirect } from 'next/navigation';

type LoginActionState = {
  username: string;
  error: string;
};

export async function loginAction(state: LoginActionState, formData: FormData) {
  await asyncDelay(1000, true);

  if (!(formData instanceof FormData)) {
    return {
      username: '',
      error: 'Dados inválidos',
    };
  }

  const username = formData.get('username')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim() || '';

  if (!username || !password) {
    return {
      username,
      error: 'Todos os campos de login devem estar preenchidos',
    };
  }

  const isUsernameValid = username === process.env.LOGIN_USER;
  const isPasswordValid = await verifyPassword(
    password,
    process.env.LOGIN_PASS?.toString() || '',
  );

  if (!isUsernameValid || !isPasswordValid) {
    return {
      username,
      error: 'Nome de usuário ou senha incorretos',
    };
  }

  await createLoginSession(username);
  redirect('/admin/post');
}
