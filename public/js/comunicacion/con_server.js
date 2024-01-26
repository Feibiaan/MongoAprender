async function servindoOServer(id, metodo, endpoint) {
    console.log("desde con server: ", id, metodo, endpoint);
    let resposta = await fetch(`/${endpoint}/${id}`,{method:metodo});
    let datosConvertidos = await resposta.json();

    console.log("resposta json ", datosConvertidos)
}

export { servindoOServer }