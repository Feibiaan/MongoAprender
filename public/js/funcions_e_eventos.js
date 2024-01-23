function preparandoDatos(datos) {

    let datosMap = datos.documentos.map((documento) => {
        let _div = document.createElement("div");
        document.querySelector(".lista").append(_div);
        let _span = document.createElement("span");
        
        // for (let elementos in documento) {
            //     _span.innerText += documento[elementos] + " ";            
            // }
        let tamanhio = Object.keys(documento).length;
        let elementos = Object.values(documento)
        
            for(let contador = 0; contador < tamanhio ;contador ++){   
                
                let _span2 = document.createElement("span");

            if(Array.isArray(elementos[contador])){
                // bucle sobre o array
                for(let contador2 = 0; contador2 < elementos[contador].length ;contador2 ++){
                    console.log('dentro: ',_span)
                    _span2.innerHTML += elementos[contador][contador2];
                }
            }
            _span2.innerHTML += elementos[contador];
            console.log('dentro fora: ',_span2)
            _div.append(_span2)
            
        }
        
    })
}

async function preguntarDatos(){
    console.log("hola");
    let datosLeidos = await fetch("/lecturadatos");
    let datosJson = await datosLeidos.json();
    
    preparandoDatos(datosJson);    
}


export { preguntarDatos }