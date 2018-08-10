//Selector document. Que la pagina esté lista
//$ = JQuery es lo mismo. Un objeto. Entre parentesis el selector, y detras del punto, el método

$(document).ready(function(){
    console.log("Estamos listos!")

//Selector de ID
                $("#Rojo").css("background","red")
                     .css("color","white");

                $("#Amarillo").css("background","yellow")
                             .css("color","green");

                $("#Verde").css("background","green")
                           .css("color","white");

//Selectores de clase
//var mi_clase = $(".zebra").css("padding","5px");

//Esto sería lo mismo - aunque selecciono metodos de JQuery que permiten hacer más cosas
    //    console.log(mi_clase.eq(1))

//Añadiendo la clase zebra a los que tengan clase sin borde
    $(".sin_borde").click(function(){
        console.log("Click dado!!");
        $(this).addClass("zebra");
    });

//Selectores de etiquetas
                    //Cursor pointer, cambiamos el cursor del raton y aparecera la manita
    var parrafos = $("p").css("cursor", 'pointer');

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

//Selector de atributos
$('[title = "Google"]').css('background','yellow')
                         .css('color','red');
$('[title = "Facebook"]').css('background','blue')
                         .css('color','white');
//otros
$('p,a').addClass('margen-superior');

//Concepto de busqueda usando el metodo parent de los elementos
//var busqueda = $('#caja .resaltado').eq(0).parent().find('[title = "Google"]');

var busqueda = $('#elemento2').parent().parent().find('.resaltado');
console.log(busqueda);
});
