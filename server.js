const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const fileUpload = require("express-fileupload");
//Utilizamos as funcións utilizadas para mongodb

const { fLerDatos,fBorrarDatos } = require("./middlewares/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "public")));
// A partir de aqui establecense os endpoint do BACKEND
// app.get recupera os datos pedidos anteriormente
/*app.get("/lecturadatos",(req,res) => {
    let obxeto = {enviados:"enviando datos..."}
    res.send(obxeto);
});*/
app.get("/lecturadatos",fLerDatos);
// el id de borrardatos se recoge por req.params y viene del server
app.delete(`/borradodatos/:id`,fBorrarDatos);
//app.delete(`/borradodatos/:id`,fBorrarDatos);
//INICIAR SERVIDOR
app.listen(4000, function() {
  console.log("Server running");
});