const { Pool } = require("pg");

require('dotenv').config();

const pool = new Pool({
    user: process.env.db_username,
    host: process.env.db_host,
    database: process.env.db_name,
    password: process.env.db_password,
    port: process.env.db_port,
});

const createUser = (values) => {
    const query = `
INSERT INTO users (
    username, phone, email, password, fullname, gender, dob, age, photo, cell, bank, location, coordinates, timezone, uuid, md5, sha1, sha256, registered, registered_age, nat
) VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21
);
    `
    pool.query(query, values);
};


module.exports = createUser;