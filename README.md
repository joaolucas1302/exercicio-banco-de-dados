# 🎓 Exercício Banco de Dados — Node.js + TypeScript + PostgreSQL

Um projeto educacional desenvolvido em **Node.js** e **TypeScript** que cadastra alunos e suas notas em três matérias — **Matemática**, **Geografia** e **História** — salvando tudo em um banco de dados **PostgreSQL**.  
O sistema calcula automaticamente a média de 8 provas por matéria e grava os resultados.

---

## 🚀 Funcionalidades

✅ Cadastro de alunos (nome, série e idade)  
✅ Inserção de notas para 3 matérias (8 provas cada)  
✅ Cálculo automático da média  
✅ Armazenamento dos dados no PostgreSQL  
✅ Tratamento de erros com TypeScript  
✅ Interface interativa via terminal  

---

## 🧠 Estrutura do Banco de Dados

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
⚙️ Tecnologias utilizadas
Tecnologia	Função
🟩 Node.js	Ambiente de execução JavaScript
🟦 TypeScript	Tipagem estática e segurança de código
🐘 PostgreSQL	Banco de dados relacional
💬 readline-sync	Leitura interativa no terminal
🔌 pg	Biblioteca para conectar ao PostgreSQL

🧩 Estrutura do projeto
bash
Copiar código
📂 exercicio-banco-de-dados/
 ├── ExercicioBancoDeDados.ts     # Script principal
 ├── package.json
 ├── tsconfig.json                # (se estiver usando TypeScript)
 ├── node_modules/
 └── README.md
💻 Como executar o projeto
1️⃣ Clonar o repositório
bash
Copiar código
git clone https://github.com/joaolucas1302/exercicio-banco-de-dados.git
cd exercicio-banco-de-dados
2️⃣ Instalar as dependências
bash
Copiar código
npm install
3️⃣ Criar o banco de dados no PostgreSQL
Entre no psql e execute o script SQL da seção anterior.

4️⃣ Configurar o banco no código
No arquivo ExercicioBancoDeDados.ts, ajuste a configuração:

ts
Copiar código
const dbConfig = {
    user: 'aluno',       // usuário do PostgreSQL
    host: 'localhost',   // ou o nome do seu servidor
    database: 'db_profedu',
    password: '102030',  // sua senha
    port: 5432,
};
5️⃣ Rodar o programa
Se estiver em TypeScript:

bash
Copiar código
npx ts-node ExercicioBancoDeDados.ts
Se estiver em JavaScript:

bash
Copiar código
node ExercicioBancoDeDados.js
🧮 Exemplo de execução
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

Matéria: Geografia
Digite a nota 1: 8
...
Média de Geografia: 8.38

Matéria: História
Digite a nota 1: 7
...
Média de História: 7.50

✅ Todas as informações foram salvas no banco de dados com sucesso!
🧰 Comandos úteis do Git
bash
Copiar código
# Verificar o repositório remoto
git remote -v

# Atualizar o repositório local com o remoto
git pull --rebase origin main

# Enviar alterações para o GitHub
git add .
git commit -m "Atualiza código e documentação"
git push -u origin main
📘 Aprendizados
Durante o desenvolvimento deste projeto, foram aplicados conceitos de:

Conexão entre Node.js e PostgreSQL

Manipulação de arrays e médias no banco de dados

Tipagem forte com TypeScript

Uso de transações SQL para garantir integridade dos dados

Boas práticas de organização de código

🧑‍💻 Autor
João Lucas
📍 Estudante de Ciencias da Computação
🔗 github.com/joaolucas1302

📜 Licença
Este projeto foi desenvolvido para fins educacionais e pode ser utilizado livremente para estudo e aprendizado.
Feito com  utilizando Node.js + TypeScript + PostgreSQL.
