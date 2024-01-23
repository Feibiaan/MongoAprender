function preparandoDatos(datos) {
  let datosMap = datos.documentos.map((documento) => {
    let _div = document.createElement("div");
    document.querySelector(".lista").append(_div);
    let _span = document.createElement("span");

    let tamanhio = Object.keys(documento).length;
    let elementos = Object.values(documento);

    for (let contador = 0; contador < tamanhio; contador++) {
      let _span2 = document.createElement("span");

      if (Array.isArray(elementos[contador])) {
        // bucle sobre o array
        for (let contador2 = 0; contador2 < elementos[contador].length; contador2++) {
            let _span3 = document.createElement("span")
        //   console.log("dentro: ", elementos[contador][contador2]);
            _span3.innerHTML += elementos[contador][contador2];
            _span2.append(_span3);
        }
      }
      _span2.innerHTML += elementos[contador];
    //   console.log('dentro fora: ',_span2)
      _div.append(_span2);
    }
    let imax = ["borrar", "editar", "guardar"];
    for(let imaxenes of imax) {

      let imx = document.createElement("img");
      imx.setAttribute("src", `./assets/${imaxenes}.png`);
      imx.setAttribute("name", `${imaxenes}`);
      _div.append(imx);
    }
    //document.querySelector(".")
    
});
document.querySelectorAll('#borrar')[0].addEventListener("click",(e) => {
    console.log("hola", e.target)
})
/* document.querySelectorAll[0].addEventListener("click",(e) => {
    console.log("hola", e.target)
}) */
}

async function preguntarDatos() {
//   console.log("hola");
  let datosLeidos = await fetch("/lecturadatos");
  let datosJson = await datosLeidos.json();

  preparandoDatos(datosJson);
}

export { preguntarDatos };
