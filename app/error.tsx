'use client';

import { useEffect } from 'react';
import { ErrorMessageComponent } from '@/components/ErrorMessage';

type RootErrorProps = {
  error: Error;
  reset: () => {};
};

export default function RootErrorPage({ error, reset }: RootErrorProps) {
  useEffect(() => {}, [error]);
  return (
    <section>
      <title>Erro interno</title>
      <ErrorMessageComponent
        contentTitle="501"
        content="Erro 501 - Oops, erro nosso... Não se preocupe, já estamos corrigindo!"
      />
    </section>
  );
}
