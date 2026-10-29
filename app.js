import express from 'express';
import games from './jogos.js';

const app = express();
const port = 3000;

app.get('/', (requisicao, resposta) => {
    resposta.json(games);
});

app.listen(port, ()=> console.log (`Servidor rodando na porta ${port}!`));
