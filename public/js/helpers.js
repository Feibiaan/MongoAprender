import { servindoOServer } from "./comunicacion/con_server.js";
function seleccionTarefaARealizar(id, tarefaARealizar) {
  // console.log('id e tarefaARealizar', id, tarefaARealizar);

  let metodo = "";
  let endpoint = "";

  // if (tarefaARealizar === 'guardar') {
  //   metodo = "PUT";
  // }
  if(tarefaARealizar === 'borrar') {
    metodo = "DELETE"
    endpoint = 'borradodatos'
  } 

  servindoOServer(id, metodo, endpoint)

}

function eventosEGB(refTodos) {
    for(let refElemento of refTodos) {
      refElemento.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute('id');
        let tarefaARealizar = e.target.getAttribute('class');
          seleccionTarefaARealizar(id, tarefaARealizar);

          e.stopImmediatePropagation();
        })
      }
}

export { eventosEGB }