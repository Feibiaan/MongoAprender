function preparandoDatos(datos) {

    let datosMap = datos.documentos.map((documento) => {
        let _div = document.createElement("div");
        document.querySelector(".lista").append(_div);
        let _span = document.createElement("span");

        for (let elementos in documento) {
            _span.innerText += documento[elementos] + " ";            
        }
        _div.append(_span);
    })
}

async function preguntarDatos(){
    console.log("hola");
    let datosLeidos = await fetch("/lecturadatos");
    let datosJson = await datosLeidos.json();
    
    preparandoDatos(datosJson);    
}


export { preguntarDatos }