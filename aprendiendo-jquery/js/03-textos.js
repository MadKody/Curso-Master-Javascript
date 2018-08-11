$(document).ready(function(){
    //alert("Hola funciono");
// Coregemos el atributo href y meterlo en el texto
    $('#add_button').click(function(){
        var link = $('#add_link').val();
        console.log(link);
        $('#menu').append('<a href= "'+link+'"></a>');
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
    });
}