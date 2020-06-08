const express = require("express");
const cors = require('cors';)
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

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

Banco de Dados

SQL: MySQL, SQLite, PostgreSQL, Oracle, MicrosoftSQL Server
NoSQL: MongoDB, CouchDB, etc

Opções de configuração do DB

Driver: Select * FROM users
Query Builder: table('users').select('*').where()

*/

app.listen(3333);