// Obtener referencia al overlay y al botón "Cerrar"

var closeButtons = document.getElementsByClassName(".close");

// Agregar evento click a cada botón "Cerrar"
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", closePopup);
}

// Agregar evento click a cada elemento de la lista
var elements = document.getElementsByTagName("li");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", openPopup);
}

// Función para abrir el popup
function openPopup(event) {
  event.preventDefault();
  var popup = this.querySelector(".popup");
  popup.style.display = "block";

}

// Función para cerrar el popup
function closePopup(event) {
  event.preventDefault();
  var popup = this.closest("li").querySelector(".popup");
  if (popup) {
    popup.style.display = "none";
   
  } 
}


