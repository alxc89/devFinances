const express = require("express");
const path = require("path");
const router = require("./router");

const app = express();
const PORT = process.env.PORT || 3001;

//setanado a engine ejs
app.set("view engine", "ejs");
//declarando os arquivos static
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
