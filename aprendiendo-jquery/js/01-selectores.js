//Selector document. Que la pagina esté lista
//$ = JQuery es lo mismo. Un objeto. Entre parentesis el selector, y detras del punto, el método

$(document).ready(function(){
    console.log("Estamos listos!")

//Selector de ID
var rojo = $("#Rojo").css("background","red")
                     .css("color","white");
    console.log(rojo);

var amarillo = $("#Amarillo").css("background","yellow")
                             .css("color","green");

                $("#Verde").css("background","green")
                           .css("color","white");

//Selectores de clase
var mi_clase = $(".zebra").css("padding","5px");
    mi_clase.css("border","5px dashed black");
    console.log(mi_clase[0]);

//Esto sería lo mismo - aunque selecciono metodos de JQuery que permiten hacer más cosas
    //    console.log(mi_clase.eq(1))

//Añadiendo la clase zebra a los que tengan clase sin borde
    $(".sin_borde").click(function(){
        console.log("Click dado!!");
        $(this).addClass("zebra")
    })
    mi_clase.css("border","5px dashed black");
    console.log(mi_clase[0]);


});


