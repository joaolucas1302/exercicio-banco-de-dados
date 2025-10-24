# 🎓 Exercício Banco de Dados

Projeto em **Node.js + TypeScript + PostgreSQL** que cadastra alunos e suas notas em Matemática, Geografia e História, calcula a média e salva no banco de dados.

---

## Objetivo

- Cadastrar alunos (nome, série, idade)  
- Registrar 8 notas por matéria  
- Calcular média automaticamente  
- Armazenar dados no PostgreSQL

---

## Tecnologias

- Node.js  
- TypeScript  
- PostgreSQL  
- pg (conexão Node ↔ PostgreSQL)  
- readline-sync (entrada via terminal)

---

## Estrutura do Banco de Dados

```sql
CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    serie VARCHAR(50),
    idade INT
);

CREATE TABLE materias (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES alunos(id) ON DELETE CASCADE,
    nome VARCHAR(50),
    notas NUMERIC[],
    media NUMERIC
);
Estrutura do Projeto
pgsql
Copiar código
📦 exercicio-banco-de-dados
 ┣ 📜 ExercicioBancoDeDados.ts
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 README.md
 ┗ 📂 node_modules/
Como Executar
Clonar o repositório:

bash
Copiar código
git clone https://github.com/joaolucas1302/exercicio-banco-de-dados.git
cd exercicio-banco-de-dados
Instalar dependências:

bash
Copiar código
npm install
Criar o banco no PostgreSQL (executar o script acima).

Configurar conexão no ExercicioBancoDeDados.ts:

ts
Copiar código
const dbConfig = {
    user: 'aluno',
    host: 'localhost',
    database: 'db_profedu',
    password: '102030',
    port: 5432,
};
Executar:

bash
Copiar código
npx ts-node ExercicioBancoDeDados.ts
Exemplo de Execução
yaml
Copiar código
--- Cadastro de Novo Aluno ---
Digite o nome: João Silva
Digite a série: 8º Ano
Digite a idade: 13

--- Cadastro de Notas ---
Matéria: Matemática
Digite a nota 1: 7
...
Média de Matemática: 8.25

✅ Dados salvos no banco de dados com sucesso!
Comandos Git Úteis
bash
Copiar código
git remote -v
git pull --rebase origin main
git add .
git commit -m "Atualiza código e documentação"
git push -u origin main
Autor
João Lucas
Estudante de Desenvolvimento de Sistemas
github.com/joaolucas1302

Licença
Projeto educacional. Pode ser usado e modificado livremente, mantendo os créditos.
