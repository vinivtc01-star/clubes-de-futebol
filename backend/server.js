const express = require("express");
const app = express();
const clubesRoutes = require("./routes/clubes");

app.use(express.json());
app.use("/clubes", clubesRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
