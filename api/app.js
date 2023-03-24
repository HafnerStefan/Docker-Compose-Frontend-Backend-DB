'use strict';
const { Client } = require('pg');

const cors = require('cors');
const express = require('express');
const {flaschenpost} = require('flaschenpost');
const http = require('http');

const logger = flaschenpost.getLogger();
const api = express();

api.use(cors());

api.get('/',(req, res) => {
    res.json({
        now: Date.now()
    });
});

const server = http.createServer(api);
const port = 3_000; // default
server.listen(port,() => {
    logger.info('Server started.', {port},);

(async () => {

const client = new Client({
  password: "root",
  user: "root",
  host: "postgres",
  database: "postgres",
  port: 5432,
});

await client.connect();
 
const res = await client.query('SELECT $1::text as message', ['Hello world!']);
console.log(res.rows[0].message); // Hello world!
await client.end();

 });

});


