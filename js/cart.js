$(document).ready(function() {
    $('[data-delete]').on('click', function() {
        var el = $(this);
        openConfirmModal('Desea eliminar el item actual?', function() {
           location = el.attr('href'); 
        });
        return false;
    });
    $('[data-cancel-shopcart]').on('click', function() {
        var el = $(this);
        openConfirmModal('Desea cancelar la compra actual?', function() {
           location = el.attr('href'); 
        });
        return false;
    });
});
