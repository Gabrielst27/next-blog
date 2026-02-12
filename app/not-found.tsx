import { ErrorMessage } from 'components/ErrorMessage';

export default function NotFoundPage() {
  return (
    <section>
      <title>Página não encontrada</title>
      <ErrorMessage
        contentTitle="404"
        content="Erro 404 - A página que você está tentando acessar não existe"
      />
    </section>
  );
}
