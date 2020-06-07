const express = require("express");

const app = express();

app.use(express.json());

/*
Métodos HTTP:

GET: Buscar uma informação do Back-end
POST: Criar uma informação no Back-end
PUT: Alterar uma informação no Back-end
DELETE: Deletar uma informação no Back-end

Tipos de parâmetros

Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição utilizado para criar ou alterar recursos

*/
app.post('/', (req, res) => {
  const body = req.body;

  console.log(body)

  return res.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Diego Fernandes'
  });
});


app.listen(3333);