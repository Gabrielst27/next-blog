'use client';

import { loginAction } from '@/actions/login/login-action';
import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { LogInIcon } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';

export function AdminLoginForm() {
  const initialState = {
    username: '',
    error: '',
  };
  const [state, action, isPending] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (state.error) {
      toast.dismiss();
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="m-6 py-12 px-8 rounded-lg bg-slate-800">
      <form action={action}>
        <div className="flex flex-col gap-6">
          <InputText
            maxLength={64}
            type="text"
            name="username"
            labeltext="Usuário"
            placeholder="Digite seu nome de usuário"
            disabled={isPending}
            defaultValue={state.username}
          />
          <InputText
            maxLength={64}
            name="password"
            type="password"
            labeltext="Senha"
            placeholder="Digite sua senha"
            disabled={isPending}
          />
          <Button className="flex gap-2" type="submit">
            <LogInIcon />
            <p>Entrar</p>
          </Button>
          {!!state.error && (
            <p className="text-red-400 text-center">{state.error}</p>
          )}
        </div>
      </form>
    </div>
  );
}
