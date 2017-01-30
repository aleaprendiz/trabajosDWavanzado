$("#fecha").datepicker();


$(function(){
  $("#arrastre").draggable();

  $("#canasta").droppable({
    drop: function(event,ui){
      $(this).addClass("ui-state-highlighht").find("p").html("Anotaste una canasta");
    }

  });
});
