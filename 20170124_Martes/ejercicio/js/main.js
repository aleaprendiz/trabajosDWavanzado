/*if(jQuery){
  alert("Si tenemos jQuerry");
}
*/


/*document.getElementById('cuadrado')*/

/* $ es para hacer referencias y equivle al document.getElementById*/
/*
$(".circulo").click(function(){
  alert("Soy el Circulo")
});

$("#cuadrado").click(function(){
  alert("Soy un cuadrado");
});

$("div").click(function(){
  alert("Soy un div")
});

$("p").click(function(){
  alert("Soy un parrafo");
});

$("*").click(function(){
  alert("Soy un algo");
});

*/

/*********************************************************/

$(".circulo").click(function(){


/*alert($("p").html() );*/
/* $("p").html() = "Texto a remplazar"  Esto no es valido );*/

  /*alert($("p").html("TEXTO REEMPLAZADO"));*/
/*alert($("iframe").attr("src", "OTRACOSA"));*/

/*
$("iframe").attr("src", "http://www.jornada.unam.mx/ultimas"));
*/

var variable = $("iframe").attr("src");
/*alert(typeof variable);*/

var x = variable.localeCompare("http://www.jornada.unam.mx/ultimas");

alert(x);

if( x != 0){

  alert(variable);


/*
  $("iframe").attr("src", "http://www.eluniversal.com.mx/"));
*/
}

});


/***********************************************/
/***********************************************/
/***********************************************/

/*
$("button").click(function(){
  alert($(".circulo").css("width"));


  $(".circulo").css("width", "400px");
    alert($(".circulo").css("width"));
})

*/

/*
$("button").click(function(){
  $(".circulo").css({
    'width':'300px',
    'height':'500px',
    'background-color':'black'
  });

})

*/

/*
$("button").click(function(){
  $(".circulo").addClass("circulo2");
})
*/

/*
$("button").click(function(){
  $(".circulo").hide();
})
*/

/*
$("button").click(function(){
  /*$(".circulo").fadeOut("slow");
  $(".circulo").fadeOut(10000);
})
*/

/*.click es un evento */
/*
$(".circulo").click(function(){
  $(this).animate({
    width:"300px",
    height:"300px"
  },4000)
})
*/


/*
$(".circulo").hover(function(){
  $(this).animate({
    width:"300px",
    height:"300px",
    /*backgroundColor:"red"
  },400)
})
*/


/*
$(".circulo").dbclick(function(){
  $(this).animate({
    width:"300px",
    height:"300px"
  },400)
})

*/
