//funcion que eliminar informacion de modal para ir actualizando en cada producto seleccionado

$("#descripcion").on("hidden.bs.modal", function () {
    $( '.modal-title' ). remove();
    $( '.modal-body' ). remove();
});