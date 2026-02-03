const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM clubes WHERE id = ?",
    [id],
    (erro, resultado) => {
      if (erro) return res.status(500).json(erro);
      res.json(resultado[0]);
    }
  );
});

module.exports = router;
