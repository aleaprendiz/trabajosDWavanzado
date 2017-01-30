document.getElementById("inicia").onclick = function () {

    /*document.getElementById("objetivo").style.cssText="display:none"*/

    function colorRandom() {
        var posibilidades = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {

            /*Math.random() devuelve un numero aleatorio entre 0 y 1*/

            /*Math.floor() redondea*/
            color +=
                    posibilidades[Math.floor(Math.random() * 15)];
        }
        return color;
    }

    function alturaRandom(){
      var resultado=Math.floor(Math.random()*600);
      return resultado;


    }
    function largoRandom(){
      var resultado=Math.floor(Math.random()*95);
      return resultado;

    }

    var altura = alturaRandom();
    var largo = largoRandom();
    var randomColor = colorRandom();
    /*alert(randomColor);*/

    document.getElementById("objetivo").style.cssText = "background-color:"+randomColor+
    "; top:" + altura +"px;left:" + largo + "%;";
    /*alert("Voy bien, continuar...");*/
}


document.getElementById("objetivo").onclick = function() {
  alert("push");
}
