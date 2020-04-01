const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());
/**
 * Rota / Recurso
*/

/**
 * Método HTTP
 *
 * GET: Busca uma informção do Backend
 * POST: Criar uma informação no Backend
 * PUT: Alterar uma informação no Backend
 * DELETE: Deletar uma informação no Backend
 */

/**
 * Tipos de parâmetros
 *
 * Query Params: parâmetros nomeados enviados na rota após o símbolo de ?
 * (filtros, paginação)
 * Tout Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, Postgrees, Oracle, etc
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.use(routes);

app.listen(3333);
