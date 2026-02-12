# Configurando banco de dados

Adicione na pasta raiz o arquivo `drizzle.config.js`, e insira as configurações do seu banco de dados no seguinte formato:

```bash
import {defineConfig} from 'drizzle-kit'

export default defineConfig({
  out: './db/drizzle/migrations',
  schema: './db/drizzle/schemas.ts',
  dialect: 'banco-utilizado(SQLite, PostgreSQL, etc.)',
  dbCredentials: {
    url: './caminho/do/seu/banco'
    //outras_credenciais
  }
})
```

Feito isso, basta rodar uma migration ou iniciar a aplicação que o arquivo do banco de dados será adicionado no caminho especificado em url.

### Comandos do drizzle-kit

- Salvar migration:

```bash
npx drizzle-kit generate
```

- Rodar migration:

```bash
npx drizzle-kit migrate
```

# Configurando site

Comandos para iniciar o site:

```sh
# NECESSÁRIO TER O NODE INSTALADO!
npm i
npm run migrate
npm run build
npm start # Apenas para testes
```

### Configurações manuais

| Arquivo    | Instrução                                                  |
| ---------- | ---------------------------------------------------------- |
| .env.local | Siga o exemplo do arquivo .env.example para a configuração |
