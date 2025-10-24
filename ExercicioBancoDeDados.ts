const { Pool } = require('pg');
const readlineSync = require('readline-sync');

const dbConfig = {
    user: 'aluno',
    host: 'BRJND02P2L1W016',
    database: 'db_profedu',
    password: '102030',
    port: 5432,
};

const pool = new Pool(dbConfig);

async function inserirAluno() {
    console.log("--- Cadastro de Novo Aluno ---");

    const nome = readlineSync.question('Digite o nome: ');
    const serie = readlineSync.question('Digite a série: ');
    const idade = readlineSync.questionInt('Digite a idade: ');

    if (!nome || !serie || !idade) {
        console.error("Erro: Todos os campos são obrigatórios! Operação cancelada.");
        await pool.end();
        return;
    }

    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // Inserir aluno
        const insertAluno = `
            INSERT INTO alunos (nome, serie, idade)
            VALUES ($1, $2, $3)
            RETURNING id
        `;
        const result = await client.query(insertAluno, [nome, serie, idade]);
        const alunoId = result.rows[0].id;

        console.log(`Aluno cadastrado com sucesso (ID: ${alunoId})`);
        console.log("\n--- Cadastro de Notas ---");

        // Matérias fixas
        const materias = ["Matemática", "Geografia", "História"];

        for (const materia of materias) {
            console.log(`\nMatéria: ${materia}`);

            let notas = [];
            for (let i = 1; i <= 8; i++) {
                const nota = readlineSync.questionFloat(`Digite a nota ${i}: `);
                notas.push(nota);
            }

            const media = notas.reduce((a, b) => a + b, 0) / notas.length;

            // Inserir matéria e notas no banco
            const insertMateria = `
                INSERT INTO materias (aluno_id, nome, notas, media)
                VALUES ($1, $2, $3, $4)
            `;
            await client.query(insertMateria, [alunoId, materia, notas, media]);

            console.log(`Média de ${materia}: ${media.toFixed(2)}`);
        }

        await client.query('COMMIT');
        console.log("\n✅ Todas as informações foram salvas no banco de dados com sucesso!");
    } catch (error) {
        await client.query('ROLLBACK');
       console.error("❌ Ocorreu um erro:", (error as Error).message);
    } finally {
        client.release();
        await pool.end();
    }
}

inserirAluno();
