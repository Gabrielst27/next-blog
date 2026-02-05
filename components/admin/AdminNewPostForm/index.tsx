import { InputText } from '@/components/InputText';

export function AdminNewPostForm() {
  return (
    <div className="flex flex-col gap-6">
      <InputText
        maxLength={32}
        labeltext="Título"
        placeholder="Digite o título do post"
      />
    </div>
  );
}
