$("#alien").click(function(){
  //alert("Soy un algo");
  var texto=prompt("Realiza tu pregunta:");
      var tiro = Math.floor(Math.random()*5);
      var ppt;
      if (tiro == 0){
        ppt="SI";
      }
      else if (tiro == 1){
        ppt="PREGUNTA DE NUEVO";
      }
      else if (tiro ==2){
        ppt="PROBABLEMENTE";
      }
      else if (tiro ==3){
        ppt="NO SE";
      }
      else if (tiro ==4){
        ppt="NO";
      }
      else
        ppt="error";
      alert(ppt);
      return ppt;



});
