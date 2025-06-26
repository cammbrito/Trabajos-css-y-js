// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Validación visual del formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
  e.preventDefault(); // no hay backend, no se envia

  const inputs = this.querySelectorAll('input, textarea');
  let todoBien = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.style.border = '2px solid #db5aa7';
      todoBien = false;
    } else {
      input.style.border = '1px solid #ccc';
    }
  });

  if (todoBien) {
    alert('¡Gracias por tu mensaje!');
    this.reset();
  } else {
    alert('Por favor completá todos los campos');
  }
});
