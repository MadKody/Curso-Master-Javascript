$(document).ready(function(){
    //Mouse over
    var caja = $('#caja');
    /*
    caja.mouseover(function(){
        $(this).css("background","red");
    });
    caja.mouseout(function(){
        $(this).css("background","green");
    
    });
    */

    //HOVER (mucho mas limpio que con el metodo anterior)
    function cambiaRojo(){
        $(this).css("background","red");
   }

    function cambiaVerde(){
        $(this).css("background","green");
    }

    caja.hover(cambiaRojo, cambiaVerde);

    //Click, Doble click
    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","pink")
                .css("color","yellow");
    });

    //Blur and focus
var nombre = $('#nombre')
    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border","2px #ccc");
        //saca la informacion del input
        $('#datos').text($(this).val()).show();
        //css("display","block");
    });
});

