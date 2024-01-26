require('dotenv').config();
const { MongoClient } = require("mongodb");
const url = process.env.URLMONGO;
const client = new MongoClient(url);
const database = process.env.BBDD;
const coleccion = process.env.COLECCION;

async function fBorrarDatos (req, res) {
    try {
        await client.connect();
        // BBDD y coleccion van aqui
        const { id } = req.params;
        const db = client.db(database);
        const coll = db.collection(coleccion);
        console.log('tipo id: ', typeof id)
        // const dato = {
        // _id: id
        // }
        // await coll.deleteOne(dato);
        // find va aqui
        // const dbDelete = await coll.deleteMany(doc);

        // console.log("comprobando id: ", id);
        let datosACliente = {
            mensaxe: "chega a fBorrarDatos"
        }        
        res.send(datosACliente);
    } finally {
        //asegurar q el cliente cierra cuando acaba/error
        await client.close();
        //let obxeto = {enviados:"enviando datos..."}
    }
}

module.exports = {fBorrarDatos}; 