$(document).ready(function(){
    reloadLinks();
    //remover un atributo, en este caso el apagado del boton
    $('#add_button').removeAttr('disabled');
    //alert("Hola funciono");
// Coregemos el atributo href y meterlo en el texto
    $('#add_button').click(function(){
        //Valor de addlink 
        var link = $('#add_link').val();
        console.log(link);
        //prepend o append / uno anade el link al principio y otro al final
        //.before lo mete en la lista pero antes del elemento seleccionado
        //after lo mete en la lista pero despues del elemento seleccionado
        
        $('#menu').append('<li><a href= "'+link+'"></a></li>');
        $('#add_link').val("");
        reloadLinks();
    });

});

function reloadLinks(){
    console.log($("a").lenght);
    $("a").each(function(index){
        console.log($(this));
        var that = $(this);
        var enlace = $(this).attr("href")
        //metodo text para incrustar el enlace como texto
        that.text(enlace);
        //Abrira el link en una nueva pestana
        that.attr('target','blank');
        
        
    });
}