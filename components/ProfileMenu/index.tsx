'use client';

import { logoutAction } from '@/actions/login/logout-action';
import { Button } from '@/components/Button';
import clsx from 'clsx';
import { LogOut, User } from 'lucide-react';
import { useState, useTransition } from 'react';

interface ProfileMenuProps {
  username: string;
}

export function ProfileMenu({ username }: ProfileMenuProps) {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(async () => {
      await logoutAction();
    });
  }

  return (
    <div className="relative">
      <Button variant="icon" onClick={() => toggleMenu(!isMenuOpen)}>
        <div className="border-4 rounded-full">
          <User width={44} height={44} />
        </div>
      </Button>
      {!!isMenuOpen && (
        <div
          className={clsx(
            'absolute top-full right-0',
            'bg-slate-200 text-slate-900 shadow-lg',
            'mt-2 h-24 w-60 rounded z-40',
          )}
        >
          <div
            className={clsx(
              'flex flex-col gap-2 justify-center items-center',
              'py-2',
            )}
          >
            <h1 className="font-extrabold text-xl">Olá, {username}</h1>
            <Button
              variant="danger"
              className="flex gap-2"
              onClick={handleLogout}
              disabled={isPending}
            >
              <LogOut />
              <p>Sair</p>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
