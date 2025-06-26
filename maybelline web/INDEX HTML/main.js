// 1. Hover: Ampliar productos como efecto visual
const productos = document.querySelectorAll('#prod1, #prod2, #prod3, #prod4');

productos.forEach(producto => {
  producto.style.transition = 'transform 0.3s ease';
  producto.addEventListener('mouseenter', () => {
    producto.style.transform = 'scale(1.05)';
  });
  producto.addEventListener('mouseleave', () => {
    producto.style.transform = 'scale(1)';
  });
});

// 2. Pop-up promocional (ej: 20% de descuento)
window.addEventListener('load', () => {
  setTimeout(() => {
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div id="popupPromo" style="
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: BLACK;
        color: white;
        padding: 20px;
        border-radius: 10px;
        z-index: 1000;
        font-family: Karla, sans-serif;
        box-shadow: 0 0 15px rgba(0,0,0,0.3);">
        🎁 ¡20% OFF en tu primera compra!
        <button id="cerrarPromo" style="margin-left:10px; background:black; color:white; border:none; padding:5px 10px; cursor:pointer;">X</button>
      </div>
    `;
    document.body.appendChild(popup);

    document.getElementById('cerrarPromo').onclick = () => {
      popup.remove();
    };
  }, 1500); // aparece luego de 1.5 segundos
});

// 3. Botón "ir arriba"
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 18px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;

document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Marcar menú activo (requiere IDs en secciones)
const secciones = ['#inicio']; // podés agregar más IDs si tenés más secciones
const links = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  let current = '';
  secciones.forEach(id => {
    const section = document.querySelector(id);
    if (section && window.scrollY >= section.offsetTop - 100) {
      current = id;
    }
  });

  links.forEach(link => {
    link.classList.remove('activo');
    if (link.getAttribute('href') === current) {
      link.classList.add('activo');
    }
  });
});

// Mostrar y ocultar detalles del producto al hacer clic en el botón
const botones = document.querySelectorAll('.ver-detalle');

botones.forEach((btn) => {
  btn.addEventListener('click', () => {
    const detalle = btn.nextElementSibling;
    const visible = detalle.style.display === 'block';
    detalle.style.display = visible ? 'none' : 'block';
    btn.textContent = visible ? 'Ver más detalles' : 'Ocultar detalles';
  });
});

