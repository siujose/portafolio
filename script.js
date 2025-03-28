document.addEventListener('DOMContentLoaded', function() {
  const texto = document.querySelector('#hero h1');
  if (texto) {
    const letras = texto.textContent.split('');
    texto.textContent = '';

    letras.forEach((letra, index) => {
      const span = document.createElement('span');
      if (letra === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = letra;
      }
      span.style.display = 'inline-block';
      span.addEventListener('mouseover', function(e) {
        e.target.style.visibility = 'hidden';
        setTimeout(() => {
          e.target.style.visibility = 'visible';
        }, 5000);
      });
      texto.appendChild(span);
    });
  }
});

window.addEventListener('scroll', function() {
  let barraDeProgreso = document.getElementById("progreso");
  let alturaTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progresoScroll = (document.documentElement.scrollTop / alturaTotal) * 100;
  barraDeProgreso.style.width = progresoScroll + "%";
});
