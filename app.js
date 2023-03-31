

function agregarDeseoNuevo() {
      var formDeseo = document.getElementById("form_deseo");
      var deseo_input = formDeseo.elements['deseo_input'].value
      var listaDeseo = document.getElementById('lista_deseos_nuevos');
      var nuevoDeseo = document.createElement("li");
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
       var listaCumplidos = document.getElementById("lista_deseos_cumplidos");
       if (this.parentElement.parentElement.id === "lista_deseos_cumplidos") {
         listaCumplidos = document.getElementById("lista_deseos_nuevos");
       }
       var deseoCumplido = this.parentElement;
       listaCumplidos.appendChild(deseoCumplido);
    });
  
    nuevoDeseo.appendChild(botonEliminar);
    nuevoDeseo.appendChild(botonMover);

    document.getElementById("lista_deseos_nuevos").appendChild(nuevoDeseo);
    document.getElementById("deseo_input").value = "";
  }

  // Contador de elementos

      const listaDeseosNuevos = document.querySelector('#lista_deseos_nuevos');
      const contadorDeseosNuevos = document.querySelector('#cont_deseos_nuevos');
  
      const actualizarContador = function() {
        contadorDeseosNuevos.innerText = `Tienes ${listaDeseosNuevos.children.length} deseo(s) por cumplir.`;
      };
  
      actualizarContador();
  
      const observer = new MutationObserver(function() {
        actualizarContador();
      });
      observer.observe(listaDeseosNuevos, { childList: true });

      

      const listaDeseosCumplidos = document.querySelector('#lista_deseos_cumplidos');
      const contadorDeseosCumplidos = document.querySelector('#cont_deseos_cumplidos');
  
      const actualizarContador2 = function() {
        contadorDeseosCumplidos.innerText = `Culminaste ${listaDeseosCumplidos.children.length} deseo(s).`;
      };
  
      actualizarContador2();
  
      const observer2 = new MutationObserver(function() {
        actualizarContador2();
      });
      observer2.observe(listaDeseosCumplidos, { childList: true });