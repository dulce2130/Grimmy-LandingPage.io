const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

// Abrir o cerrar con el botón
toggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el clic cierre inmediatamente
  nav.classList.toggle('active');
});

// Cerrar al hacer clic fuera del menú
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('active');
  }
});


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });