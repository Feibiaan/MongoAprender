const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
//Utilizamos as funcións utilizadas para mongodb

const { fLerDatos } = require("./middlewares/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "public")));
// A partir de aqui establecense os endpoint do BACKEND
// app.get recupera os datos pedidos anteriormente
/*app.get("/lecturadatos",(req,res) => {
    let obxeto = {enviados:"enviando datos..."}
    res.send(obxeto);
});*/
app.get("/lecturadatos",fLerDatos)
//INICIAR SERVIDOR
app.listen(4000, function() {
  console.log("Server running");
});