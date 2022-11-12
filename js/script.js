function calcularSeguro(precioModelo, porcentajeCalcular, precioPlan) {
  return precioModelo * porcentajeCalcular + precioPlan;
}

function Plan(nombre, costo) {
  this.nombre = nombre;
  this.costo = costo;
}

function obtenerInfoAutos() {
  return fetch("../info_autos.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((e) => {
      console.error(e);
      alert("Error leyendo documento de info de autos");
    });
}

(async function () {
  // Esperamos 3 segundos para simular una llamada a un servidor
  // await new Promise(resolve => setTimeout(resolve, 3000));

  // Traemos toda la info de los autos usando fetch sobre un archivo local
  const infoAutos = await obtenerInfoAutos();

  // TODO: Sacar gif de carga

  const listDropdownModelo = document.getElementById("dropdownModeloOpciones");
  for (let auto of infoAutos.autos) {
    let modeloAuto = document.createElement("option");
    modeloAuto.value = auto.precio;
    modeloAuto.innerHTML = auto.modelo;
    listDropdownModelo.appendChild(modeloAuto);
  }

  const listDropdownAnio = document.getElementById("dropdownAnioOpciones");
  for (let year of infoAutos.years) {
    let anioAuto = document.createElement("option");
    anioAuto.value = year.porcentajePrecio;
    anioAuto.innerHTML = year.anio;
    listDropdownAnio.appendChild(anioAuto);
  }

  const basico = new Plan("Basico", 2000);
  const intermedio = new Plan("Intermedio", 3000);
  const full = new Plan("Full", 4000);

  const planes = [basico, intermedio, full];

  const listDropdownPlan = document.getElementById("dropdownPlanOpciones");
  for (let plan of planes) {
    let planElemento = document.createElement("option");
    planElemento.value = plan.costo;
    planElemento.innerHTML = plan.nombre + " - Precio: " + plan.costo;
    listDropdownPlan.appendChild(planElemento);
  }

  function hacerCotizacion() {
    const precioPlanElegido = document.getElementById(
      "dropdownPlanOpciones"
    ).value;
    if (precioPlanElegido === "nada") {
      alert("No elegiste plan");
      return;
    }

    // Variables para levantar valor de los dropdowns
 
  const modeloSelect = parseInt(document.getElementById( "dropdownModeloOpciones" ).value);
    if (select === "nada") {
    alert("Debes seleccionar un modelo");
    modeloSelect = hacerCotizacion;
    return;
  }

  const anioSelect = parseInt(document.getElementById( "dropdownAnioOpciones" ).value);
    if (select === "nada") {
    alert("Debes seleccionar un año");
    anioSelect = hacerCotizacion;
    return;
  }

  const planSelect = parseInt(document.getElementById( "dropdownPlanOpciones" ).value);
    if (select === "nada") {
    alert("Debes seleccionar un plan");
    planSelect = hacerCotizacion;
    return;
  }

    // Traer valores elegidos de los dropdown
    // Convertilos a numero
    // Llamar al metodo de arriba que te hace la cotizacion

    const valorCotizacionFinal = precioPlanElegido;
    const contendorValorCotizacion = document.getElementById(
      "valorCotizacionContenedor"
    );
    contendorValorCotizacion.innerText =
      "El valor de la cotizacion final es de " +
      valorCotizacionFinal +
      " pesos";
    contendorValorCotizacion.style.display = "block";
  }

  const botonCotizar = document.getElementById("botonCotizar");
  botonCotizar.onclick = hacerCotizacion;
})();
