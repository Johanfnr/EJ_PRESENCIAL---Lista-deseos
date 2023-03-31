

let button = document.getElementById("buttom_deseo_nuevo");

  function agregarDeseoNuevo() {
      var formDeseo = document.getElementById("form_deseo");
      var deseo_input = formDeseo.elements['deseo_input'].value
      var listaDeseo = document.getElementById('lista_deseos_nuevos');
      var nuevoDeseo = document.createElement("li");
      var button1 = document.createElement("button");
      nuevoDeseo.innerText = deseo_input;
      listaDeseo.appendChild(nuevoDeseo);

      var botonEliminar = document.createElement("button");
      var textButtonR = document.createTextNode("Eliminar");
      botonEliminar.appendChild(textButtonR);
      botonEliminar.addEventListener("click", function() {
        this.parentElement.remove();
      });

      var botonMover = document.createElement("button");
      var textButtonM = document.createTextNode("Mover");
      botonMover.appendChild(textButtonM);
      botonMover.addEventListener("click", function() {
          // Obtener la lista de destino
       var listaCumplidos = document.getElementById("lista_deseos_cumplidos");
       if (this.parentElement.parentElement.id === "lista_deseos_cumplidos") {
         listaCumplidos = document.getElementById("lista_deseos_nuevos");
       }
       var deseoCumplido = this.parentElement;
       listaCumplidos.appendChild(deseoCumplido);
    });
  
    nuevoDeseo.appendChild(botonEliminar);
    nuevoDeseo.appendChild(botonMover);

    document.getElementById("miLista").appendChild(nuevoDeseo);
    document.getElementById("nuevoDeseo").value = "";
  }


