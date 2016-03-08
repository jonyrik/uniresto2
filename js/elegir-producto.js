$(document).ready(function() {


  // Elegir producto
  var btn_ver = $('#ver-precios');
  var btn_ver2 = $('#ver-precios2');
var sel_precios = $('#sel-precios');



  if (sel_precios.css('display') === 'none') {
    $(btn_ver).click(function (event) {
      $(sel_precios).css('display', 'block');
      $(this).css('display', 'none');
      $(btn_ver2).css('display', 'block');
      event.stopPropagation();
    });
  }


    $(btn_ver2).click(function () {
      $(sel_precios).css('display', 'none');
      $(this).css('display', 'none');
      $(btn_ver).css('display', 'block');
    });




});
