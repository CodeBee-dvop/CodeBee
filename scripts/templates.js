var navbarContainer = document.getElementById('navbar-container');
var navbarContainerSistema = document.getElementById('navbar-containerSistema');
var footerContainer = document.getElementById('footer-container');

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      // Insertar el contenido del archivo nav.html en el contenedor del navbar
      navbarContainer.innerHTML = xhr.responseText;

    } else {
      console.error('Error al cargar el archivo nav.html');
    }
  }
};
xhr.open('GET', '../recursos/', true);
xhr.send();
