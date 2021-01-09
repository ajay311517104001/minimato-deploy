const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: '6369676494A',
    host: 'localhost',
    port: 5432,
    database: 'minimato'
});

module.exports = pool;