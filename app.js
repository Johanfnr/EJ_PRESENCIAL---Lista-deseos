

let button = document.getElementById("buttom_deseo_nuevo");

button.addEventListener("click", function() {
  alert("Haz hecho clic en el botón!");
});

  function agregarDeseoNuevo() {
    var formDeseo = document.getElementById("form_deseo");
    var deseo_input = formDeseo.elements['deseo_input'].value
    var listaDeseo = document.getElementById('lista_deseos_nuevos');
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = deseo_input;
    listaDeseo.appendChild(nuevoElemento);
  }



