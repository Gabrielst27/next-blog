'use client';

import { loginAction } from '@/actions/login/login-action';
import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { LogInIcon } from 'lucide-react';
import { useActionState } from 'react';

export function AdminLoginForm() {
  const [state, action, isPending] = useActionState(loginAction, undefined);

  return (
    <div className="m-6 py-12 px-8 rounded-lg bg-slate-800">
      <form action={action}>
        <div className="flex flex-col gap-6">
          <InputText
            maxLength={64}
            name="user"
            labeltext="Usuário"
            placeholder="Digite seu nome de usuário"
          />
          <InputText
            maxLength={64}
            name="password"
            labeltext="Senha"
            type="password"
            placeholder="Digite sua senha"
          />
          <Button className="flex gap-2" type="submit">
            <LogInIcon />
            <p>Entrar</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
