<!-- ===================================================== -->
<!-- 📘 Projeto: Exercício Banco de Dados - Node.js + TypeScript + PostgreSQL -->
<!-- Autor: João Lucas -->
<!-- ===================================================== -->

<h1 align="center">🎓 Exercício Banco de Dados</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-Educacional-blue?style=for-the-badge"/>
</p>

<p align="center">
  Um projeto desenvolvido em <b>Node.js</b> + <b>TypeScript</b> que cadastra alunos e suas notas em 3 matérias
  (<b>Matemática</b>, <b>Geografia</b> e <b>História</b>), calcula automaticamente a média e salva os dados
  no banco de dados <b>PostgreSQL</b>.
</p>

---

## 🧩 Sumário

- [🎯 Objetivo](#-objetivo)
- [⚙️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🧠 Estrutura do Banco de Dados](#-estrutura-do-banco-de-dados)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [🧮 Exemplo de Execução](#-exemplo-de-execução)
- [🧰 Comandos Úteis do Git](#-comandos-úteis-do-git)
- [📘 Aprendizados](#-aprendizados)
- [👨‍💻 Autor](#-autor)
- [📜 Licença](#-licença)

---

## 🎯 Objetivo

Este projeto tem como propósito praticar **integração entre Node.js e PostgreSQL** utilizando **TypeScript**.  
O sistema permite:

- Cadastrar alunos com nome, série e idade.  
- Registrar notas de 8 provas para 3 matérias.  
- Calcular automaticamente a média de cada matéria.  
- Armazenar tudo de forma segura no banco de dados.

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| 🟩 **Node.js** | Ambiente de execução JavaScript no servidor |
| 🟦 **TypeScript** | Superset do JavaScript com tipagem estática |
| 🐘 **PostgreSQL** | Banco de dados relacional |
| 🔌 **pg** | Biblioteca de conexão Node ↔ PostgreSQL |
| 💬 **readline-sync** | Entrada interativa via terminal |

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

##📂 Estrutura do Projeto
java
Copiar código
📦 exercicio-banco-de-dados
 ┣ 📜 ExercicioBancoDeDados.ts     → Script principal (TypeScript)
 ┣ 📜 package.json                 → Dependências e scripts
 ┣ 📜 tsconfig.json                → Configuração TypeScript
 ┣ 📜 README.md                    → Documentação do projeto
 ┗ 📂 node_modules/                → Bibliotecas instaladas

##🚀 Como Executar o Projeto
1️⃣ Clonar o repositório
bash
Copiar código
git clone https://github.com/joaolucas1302/exercicio-banco-de-dados.git
cd exercicio-banco-de-dados
2️⃣ Instalar dependências
bash
Copiar código
npm install
3️⃣ Criar o banco de dados no PostgreSQL
Abra o psql e execute o script SQL da seção “Estrutura do Banco de Dados”.

4️⃣ Configurar o banco no código
No arquivo ExercicioBancoDeDados.ts, ajuste os dados conforme o seu ambiente:

ts
Copiar código
const dbConfig = {
    user: 'aluno',       // Usuário do PostgreSQL
    host: 'localhost',   // Host do servidor
    database: 'db_profedu',
    password: '102030',  // Senha do PostgreSQL
    port: 5432,
};
5️⃣ Executar o programa
Se estiver usando TypeScript:

bash
Copiar código
npx ts-node ExercicioBancoDeDados.ts
Se estiver usando JavaScript:

bash
Copiar código
node ExercicioBancoDeDados.js

##🧮 Exemplo de Execução
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

##🧰 Comandos Úteis do Git
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

##📘 Aprendizados
Durante o desenvolvimento deste projeto foram aplicados conceitos de:

Conexão segura entre Node.js e PostgreSQL

Manipulação de arrays e cálculos de média

Tipagem estática e tratamento de erros com TypeScript

Uso de transações SQL (BEGIN / COMMIT / ROLLBACK)

Boas práticas de estruturação e versionamento de código

##👨‍💻 Autor
João Lucas
💼 Estudante de Desenvolvimento de Sistemas
🌐 github.com/joaolucas1302
📍 Brasil

##📜 Licença
Este projeto foi desenvolvido para fins educacionais e de aprendizado.
Você pode utilizá-lo e modificá-lo livremente, desde que mantenha os créditos do autor.

Feito com usando Node.js, TypeScript e PostgreSQL.


