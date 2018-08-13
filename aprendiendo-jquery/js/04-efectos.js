$(document).ready(function(){
    console.log('Efectos listos');

    $('#mostrar').hide();
    //Funciones de show y hide de un elemento
    $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        //metodo .show('fast') Parametro -> FAST, NORMAL, SLOW
        $('#caja').slideDown('slow');
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        //METODO  fadeOut O fadeIn
        //$('#caja').fadeOut('slow');
        //La opacidad va de O a 1

        //funcion de callback para las animaciones.
        $('#caja').slideUp('slow',function(){
            console.log("Cartel Ocultado");
        });
    });




    //togle
    $('#todoEnUno').click(function(){
        $('#caja').toggle('fast');
        //tambien esta el fadeToggle
        //slideToggle
        //slideUp para lo que no es un toggle y slideDown
        //
    });
    $('#animar').click(function(){
        $('#caja').animate({
                            marginLeft: '500px',
                            fontSize: '40px',
                            height: '105px'
                            },'slow')

                .animate({
                            borderRadius:'900px',
                            marginTop: '80px',           
                },'slow')

                .animate({
                    borderRadius:'0px',
                    marginLeft: '0px',           
                },'slow')

                .animate({
                    borderRadius:'100px',
                    marginTop: '0px',           
                },'slow')

                .animate({
                    marginLeft: '500px',
                    fontSize: '40px',
                    height: '105px'
                    },'slow');
        //
    });

});