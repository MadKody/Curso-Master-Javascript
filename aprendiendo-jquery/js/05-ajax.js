$(document).ready(function(){
    console.log("Estamos listos para AJAX");

    //LOAD - peticion AJAX con el metodo get para poder incrustar el resultado
    //$('#datos').load('https://reqres.in/');

    //Metodos GET y POST
    //Objeto JSON 
    $.get('https://reqres.in/api/users',{page: 3}, function(response){
        
        response.data.forEach((element, index) => {
            $('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>');
        });
    });
    
    $('#formulario').submit(function(e){
        //No me redirige, 
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[web="web"]').val()
        };
    
        //Response es el argumento que espera, se puede llamar como quieras
        /*
            $.post($(this).attr('action'), usuario, function(response){
                console.log(response);
            }).done(function(){
                alert('Usuario anadido correctamente');
            });
        */

        //peticion mejorada. Estructura JSON
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: $(this).attr('action'),
            data: usuario,
            beforeSend: function(){
                console.log('Enviando usuario...');
            },
            success: function(response){
                console.log(response);
            },
            error:function(){
                console.log("A occurrido un error");
            },
            timeOut: 2000
        });

        return false;
    });

});

