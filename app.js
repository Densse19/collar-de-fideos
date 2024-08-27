const imagenPikachu = document.querySelector('.mi__imagen');
const textoPikachu = document.querySelector('.pikachu h1, .pikachu p');

textoPikachu.style.display = 'none'; // Oculta el texto inicialmente

imagenPikachu.addEventListener('click', () => {
  if (textoPikachu.style.display === 'none') {
    textoPikachu.style.display = 'block'; // Muestra el texto
  } else {
    textoPikachu.style.display = 'none'; // Oculta el texto
  }
});