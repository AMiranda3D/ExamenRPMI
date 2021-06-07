//Hacemos draggable las fatas y dropable a Paco

$( function() {
    $( "#gafas" ).draggable();
  } );


// Que "invocar" cambie al personaje cada vez

$("#invocar").click(function(){
    if ($("#personas").val() == "Camilo") {
        $("#foto").attr("src","img/camilo.png");
    } else if ($("#personas").val() == "Paloma") {
        $("#foto").attr("src","img/Paloma.png");
    } else if ($("#personas").val() == "Paco") {
        $("#foto").attr("src","img/Paco.png");
    }
})


// Que pasa con los droppables

$( "#foto" ).droppable({
    drop: function( event, ui ) {

        if ($("#personas").val() == "Camilo"){
            $("h1").html("Ese no es Paco");

        } else if ($("#personas").val() == "Paloma"){
            $("h1").html("Obviamente no es Paco");

        } else if ($("#personas").val() == "Paco"){
            $("h1").html("Paco está contento!");
            $("#foto").attr("src","img/PacoGafas.png");
            $("#gafas").css("opacity","0")
        }
    }
})