import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';

export function AdminNewPostForm() {
  return (
    <form action="" className="mb-16">
      <div className="flex flex-col gap-6">
        <InputText
          maxLength={32}
          labeltext="Título"
          placeholder="Digite o título do post"
        />
        <InputCheckbox labeltext="Publicar ao salvar" />
        <div>
          <Button>Enviar</Button>
        </div>
      </div>
    </form>
  );
}
