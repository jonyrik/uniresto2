$(document).ready(function() {

// Menu Responsive
  var btn_menu1 = $('#menu1');
  var btn_menu2 = $('#menu2');
  var cont_menu = $('.tab-title.tabs-home-title[role="presentation"]');

  $(btn_menu1).click(function () {
    $(cont_menu).addClass('ver');
    $(cont_menu).removeClass('ocultar');
    $(this).addClass('ocultar');
    $(this).removeClass('ver');
    $(btn_menu2).addClass('ver');
    $(btn_menu2).removeClass('ocultar');
  });

  $(btn_menu2).click(function () {
    $(btn_menu1).addClass('ver');
    $(btn_menu1).removeClass('ocultar');
    $(this).addClass('ocultar');
    $(this).removeClass('ver');
    $(cont_menu).addClass('ocultar');
    $(cont_menu).removeClass('ver');
  });

// Acciones
  var btn_acciones = $('#acciones1');
    var btn_acciones2 = $('#acciones2');
    var li_acc = $('.acciones ul');


  $(btn_acciones).click(function () {
    $(li_acc).css('height', '400px');
    $(this).css('display', 'none');
    $(btn_acciones2).css('display', 'block');
  });
  $(btn_acciones2).click(function () {
    $(this).css('display', 'none');
    $(btn_acciones).css('display', 'block');
    $(li_acc).css('height', '');
  });

  // Amigos
    var btn_filtros = $('#btn-filtros');
    var btn_filtros2 = $('#btn-filtros2');
    var cont_select = $('.cont-select');

    $(btn_filtros).click(function () {
   	$(cont_select).css('display', 'table');
        $(btn_filtros2).css('display', 'table');
        $(this).css('display', 'none');
   });

    $(btn_filtros2).click(function () {
   	$(cont_select).css('display', 'none');
        $(btn_filtros).css('display', 'table');
        $(this).css('display', 'none');
   });


  var btn_demora1 = $('#btn-demora1');
    var btn_demora2 = $('#btn-demora2');
    var btn_demora3 = $('#btn-demora3');
  var modal = $('#m1');
  var btn_cerrar = $('#cerrar');


  $(btn_demora1).click(function () {
 	$('#m1').css('display', 'block');
 });
  $(btn_demora2).click(function () {
 	$('#m1').css('display', 'block');
 });
  $(btn_demora3).click(function () {
 	$('#m1').css('display', 'block');
 });

  $(btn_cerrar).click(function () {
 	$('#m1').css('display', '');
 });

   // Galerias
    var btn_despliega = $('.f-cerrada');
  var btn_cierra = $('.f-abierta');
  var cont_filtros = $('.cont-filtros');


  $(btn_despliega).click(function () {
 	$(this).css('display', 'none');
        $(btn_cierra).css('display', 'inline-block');
        $(cont_filtros).css('display', 'table');
 });

  $(btn_cierra).click(function () {
 	$(this).css('display', 'none');
        $(btn_despliega).css('display', 'inline-block');
        $(cont_filtros).css('display', '');
 });


});
