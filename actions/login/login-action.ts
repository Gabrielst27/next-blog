'use server';

import { verifyPassword } from '@/lib/login/manage-login';
import { asyncDelay } from '@/utils/simulate-delay';

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
  const isUsernameValid = username === process.env.LOGIN_USER;

  const password = formData.get('password')?.toString().trim() || '';
  const systemPassword = process.env.LOGIN_PASS?.toString() || '';
  const isPasswordValid = await verifyPassword(password, systemPassword);

  if (!isUsernameValid || !isPasswordValid) {
    return {
      username: username,
      error: 'Nome de usuário ou senha incorretos',
    };
  }

  return {
    username: username,
    error: '',
  };
}
