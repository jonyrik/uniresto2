$(document).ready(function(){var s=$("#menu1"),c=$("#menu2"),i=$('.tab-title.tabs-home-title[role="presentation"]');$(s).click(function(){$(i).addClass("ver"),$(i).removeClass("ocultar"),$(this).addClass("ocultar"),$(this).removeClass("ver"),$(c).addClass("ver"),$(c).removeClass("ocultar")}),$(c).click(function(){$(s).addClass("ver"),$(s).removeClass("ocultar"),$(this).addClass("ocultar"),$(this).removeClass("ver"),$(i).addClass("ocultar"),$(i).removeClass("ver")});var l=$("#acciones1"),a=$("#acciones2"),n=$(".acciones ul"),t=$(".acciones ul li");$(l).click(function(){$(n).css("height","400px"),$(t).css("height","auto"),$(t).css("padding","5px 15px"),$(t).css("visibility","visible"),$(this).css("display","none"),$(a).css("display","block"),$(a).css("height","48px")}),$(a).click(function(){$(l).css("display","block"),$(a).css("height",""),$(a).css("display","none"),$(n).css("height",""),$(t).css("height",""),$(t).css("padding",""),$(t).css("visibility","")});var e=$("#btn-filtros"),o=$("#btn-filtros2"),d=$(".cont-select");$(e).click(function(){$(d).css("display","table"),$(o).css("display","table"),$(this).css("display","none")}),$(o).click(function(){$(d).css("display","none"),$(e).css("display","table"),$(this).css("display","none")});var r=$("#btn-demora1"),p=$("#btn-demora2"),u=$("#btn-demora3"),y=$("#m1"),b=$("#cerrar");$(r).click(function(){$("#m1").css("display","block")}),$(p).click(function(){$("#m1").css("display","block")}),$(u).click(function(){$("#m1").css("display","block")}),$(b).click(function(){$("#m1").css("display","")});var h=$(".f-cerrada"),v=$(".f-abierta"),k=$(".cont-filtros");$(h).click(function(){$(this).css("display","none"),$(v).css("display","inline-block"),$(k).css("display","table")}),$(v).click(function(){$(this).css("display","none"),$(h).css("display","inline-block"),$(k).css("display","")})});