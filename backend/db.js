const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clubes_futebol"
});

module.exports = conexao;
