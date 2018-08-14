$(document).ready(function(){
    console.log("Estamos listos");
    //podemos mover el elemento a lo largo de la pagina
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();
    
    //Elemento seleccionable
    //$('.lista_seleccionable').selectable();  OJO CON LOS ESTILOS DEL HTML

    //SORTABLE - No compatible con el SELECTABLE
    $('.lista_seleccionable').sortable({
        update: function(event, ui){
            console.log("La lista ha cambiado");
            }
        });
    
    $('#elemento_movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("Eureka!!! Son colorformas");
            $(this).css("border","5px solid rgb(83, 223, 233)");
        }
    });

    //.effect("explode")    .toggle("explode")  .toggle("blind")    .toggle("fold") .toggle("drop")  .toggle("puff")    .toggle("scale") .toggle("blind") 
    $("#mostrar").click(function(){
        $('.caja_efectos').toggle("shake", 4000); 
        //podria pasarle como opciones un JSON modificando las propiedades del objeto
    });
    $('[href = "#"]').tooltip();
    
    $('#lanzar_popup').click(function(){
        $('#popup').dialog();
    });
    $('#calendario').datepicker();

    $('#pestanas').tabs();
    });