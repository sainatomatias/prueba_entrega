(function () {
  let modeloElegido,
    yearElegido,
    planElegido,
    precioModelo,
    porcentajeCalcular,
    precioPlan;

  function calcularSeguro(precioModelo, porcentajeCalcular, precioPlan) {
    return precioModelo * porcentajeCalcular + precioPlan;
  }

  function Auto(modelo, marca, year, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.precio = precio;

    this.cotizar = function () {
      console.log("El valor de la cotización es " + totalCotizacion);
    };
  }

  const FiatUno = new Auto("Uno", "Fiat", 2013, 1000);
  const Peugeot206 = new Auto("206", "Peugeot", 2014, 1500);
  const CitroenBerlingo = new Auto("Berlingo", "Citroen", 2015, 2000);
  const VolkswagenBora = new Auto("Bora", "Citroen", 2016, 2500);
  const VolkswagenPolo = new Auto("Polo", "Citroen", 2017, 3000);
  const Peugeot208 = new Auto("208", "Citroen", 2018, 3500);
  const VolkswagenGol = new Auto("Gol", "Citroen", 2019, 4000);
  const ChevroletCorsa = new Auto("Corsa", "Citroen", 2020, 4500);
  const FordFocus = new Auto("Focus", "Citroen", 2021, 5000);
  const ChevroletCruze = new Auto("Cruze", "Citroen", 2022, 5500);

  const autos = [
    FiatUno,
    Peugeot206,
    CitroenBerlingo,
    VolkswagenBora,
    VolkswagenPolo,
    Peugeot208,
    VolkswagenGol,
    ChevroletCorsa,
    FordFocus,
    ChevroletCruze,
  ];

  const listDropdownMarca = document.getElementById('dropdownMarca');

  for (let auto of autos) {
    let marcaAuto = document.createElement('option');
    marcaAuto.value = auto.marca
    marcaAuto.innerHTML = auto.marca;
    listDropdownMarca.appendChild(marcaAuto);
  }

  const listDropdownModelo = document.getElementById('dropdownModeloOpciones');

  for (let auto of autos) {
    let modeloAuto = document.createElement('option');
    modeloAuto.value = auto.modelo
    modeloAuto.innerHTML = auto.modelo;
    listDropdownModelo.appendChild(modeloAuto);
  }

  const listDropdownAnio = document.getElementById('dropdownAnioOpciones');

  for (let auto of autos) {
    let anioAuto = document.createElement('option');
    anioAuto.value = auto.year
    anioAuto.innerHTML = auto.year;
    listDropdownAnio.appendChild(anioAuto);
  }


  function Plan(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
  }

  const basico = new Plan("basico", 2000);
  const intermedio = new Plan("intermedio", 3000);
  const full = new Plan("full", 4000);

  const planes = [basico, intermedio, full];

  const listDropdownPlan = document.getElementById('dropdownPlanOpciones');

  for (let plan of planes) {
    let planElemento = document.createElement('option');
    planElemento.value = plan.costo
    planElemento.innerHTML = plan.nombre + ' - ' + plan.costo;
    listDropdownPlan.appendChild(planElemento);
  }

  function hacerCotizacion() {
    const precioPlanElegido = document.getElementById('dropdownPlanOpciones').value;
    if (precioPlanElegido === 'nada') {
        alert('capo no elegiste plan');
        return;
    }

    debugger;
    // Traer valores elegidos de los dropdown
    // Convertilos a numero
    // Llamar al metodo de arriba que te hace la cotizacion

    const valorCotizacionFinal = precioPlanElegido;
    const contendorValorCotizacion = document.getElementById('valorCotizacionContenedor');
    contendorValorCotizacion.innerText = 'El valor de la cotizacion final es de ' + valorCotizacionFinal + ' pesos'
    contendorValorCotizacion.style.display = 'block';
  }

  const botonCotizar = document.getElementById('botonCotizar');
  botonCotizar.onclick = hacerCotizacion;
})();
