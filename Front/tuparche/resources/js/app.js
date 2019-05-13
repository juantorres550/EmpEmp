window.jQuery = window.$ = require('jquery');

if( $("#u_search") ) {
    $("#u_search").keyup( e => {
        if ( e.keyCode === 13 ){
            Swal.fire({
                title: 'Estamos trabajando en ello.',
                text: 'La búsqueda estará disponible en la capa de usuario.',
                type: 'info',
                confirmButtonText: 'Entendido'
              });
        }
    });
}

$(".resp_menu .cont").click(function() {
    $(this).toggleClass("active")
    this.parentNode.parentNode.classList.toggle("show");
});