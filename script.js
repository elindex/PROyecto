document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('verVuelosBtn');
  const seccionVuelos = document.getElementById('vuelos');


  if (boton && seccionVuelos) {
   boton.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    seccionVuelos.style.display= 'block';
    boton.style.display = 'none';
    
   });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.btn-vuelo');
  const formCompra = document.getElementById('formCompra');
  const destinoSpan = document.getElementById('destinoSeleccionado');
  const compraForm = document.getElementById('compraForm');
  const mensajeCompra = document.getElementById('mensajeCompra');

  let destinoActual = '';

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      destinoActual = boton.getAttribute('data-destino');
      destinoSpan.textContent = destinoActual;
      formCompra.style.display = 'block';
      mensajeCompra.textContent = '';
      window.scrollTo({ top: formCompra.offsetTop, behavior: 'smooth' });
    });
  });

  compraForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cantidad = document.getElementById('cantidadEntradas').value;
    if(cantidad > 0) {
      mensajeCompra.textContent = `Has comprado ${cantidad} entrada(s) para ${destinoActual}. ¡Gracias por tu compra! ✈️`;
      formCompra.style.display = 'none';
    } else {
      mensajeCompra.textContent = 'Por favor, ingresa una cantidad válida.';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Obtener botones
  const btnInicio = document.getElementById('inicioBtn');
  const btnVuelos = document.getElementById('vuelosBtn');
  const btnReservas = document.getElementById('reservasBtn');
  const btnContacto = document.getElementById('contactoBtn');

  // Obtener secciones
  const secciones = {
    inicio: document.getElementById('inicio'),
    vuelos: document.getElementById('vuelos'),
    reservas: document.getElementById('reservas'),
    contacto: document.getElementById('contacto'),
  };

  // Función para mostrar una sección y ocultar las demás
  function mostrarSeccion(seccionMostrar) {
    for (const key in secciones) {
      secciones[key].style.display = key === seccionMostrar ? 'block' : 'none';
    }
  }

  // Eventos click
  btnInicio.addEventListener('click', e => {
    e.preventDefault();
    mostrarSeccion('inicio');
  });

  btnVuelos.addEventListener('click', e => {
    e.preventDefault();
    mostrarSeccion('vuelos');
  });

  btnReservas.addEventListener('click', e => {
    e.preventDefault();
    mostrarSeccion('reservas');
  });

  btnContacto.addEventListener('click', e => {
    e.preventDefault();
    mostrarSeccion('contacto');
  });

  // Mostrar Inicio por defecto
  mostrarSeccion('inicio');
 });

 const reservaForm = document.getElementById('reservaForm');
  const mensajeReserva = document.getElementById('mensajeReserva');

  reservaForm.addEventListener('submit', e => {
    e.preventDefault();
    const vuelo = reservaForm.vueloSelect.value;
    const cantidad = reservaForm.cantidadEntradas.value;

    if (vuelo && cantidad > 0) {
      mensajeReserva.innerText = `Has reservado ${cantidad} entrada(s) para el vuelo a ${vuelo}. ¡Gracias por tu compra!`;
      reservaForm.reset();
    } else {
      mensajeReserva.innerText = 'Por favor, selecciona un vuelo y una cantidad válida.';
    }
  });

  // Formulario de contacto
  const contactoForm = document.getElementById('contactoForm');
  const mensajeContacto = document.getElementById('mensajeContacto');

  contactoForm.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = contactoForm.nombre.value.trim();
    const email = contactoForm.email.value.trim();
    const mensaje = contactoForm.mensaje.value.trim();

    if (nombre && email && mensaje) {
      mensajeContacto.innerText = `Gracias por contactarnos, ${nombre}. Te responderemos pronto.`;
      contactoForm.reset();
    } else {
      mensajeContacto.innerText = 'Por favor, completa todos los campos.';
    }
  });

