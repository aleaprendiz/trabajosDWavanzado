$(document).ready(function () {

//Funcion para cambiar el fonto de la pagina de forma aleatoria INICIO
    var imagenes = ['imagenes/c1.jpg',
        'imagenes/c2.jpg', 'imagenes/c3.jpg',
        'imagenes/c5.jpg',
        'imagenes/c6.jpg', 'imagenes/c7.jpg', 'imagenes/c8.jpg'];

    $(".imgFondo").css('background-image', 'url('
            + imagenes[Math.floor(Math.random() * 7)] + ')');
//Funcion para cambiar el fonto de la pagina de forma aleatoria FIN

//Aqui se utiliza el API de google maps "Geocoding API" y en el parametro "address" se coloca la direccion de la que se quiere obtener la informacion

//Esta URL se copia de las instrucciones de la pagina de la API
    /*
     https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
     */


    /*
     var liga = "https://maps.googleapis.com/maps/api/geocode/json?address="+direccion+"&key=AIzaSyCcB0JmIjFgZdpHIeISu9VOmSzJpuqy-oc";
     */


    $("#miBoton").click(function () {
        var direccion = $("#direccion").val();

        //var direccion = "Tultitlan 11, Vergel del sur ";

        var link = "https://maps.googleapis.com/maps/api/geocode/json?address=" +
                direccion +
                "&key=AIzaSyCcB0JmIjFgZdpHIeISu9VOmSzJpuqy-oc";


        //document.write(link);
        /*AJAX Es un metodo para obtener o hacer una consulta a un API */

        $.ajax({
            dataType: "json",
            url: link,
            success: recibirDatos
        });

        function recibirDatos(json) {
            //alert("Lo logramos :D");
            var informacion = json;
            //console.log(informacion);
            console.log(informacion.results[0].address_components[6].long_name);

            var cp = informacion.results[0].address_components[6].long_name;

            //alert(cp);
            // $("#respuesta").html(cp);//no funciono

            $("#respuesta").append('<div class="offset-m3 col m4 card-panel yellow ligthten-1"><h6> Tu código postal es:' + cp + '</h6></div>')


        }
    });


});

/*
 $("#mandar").click(function(){
 var d = $("#direccion").val();
 })
 */


/*
 $("#miBoton").click(function(){
 alert("le di click");

 //recibirDatos();
 })
 */



/*
 function largoRandom(){
 var resultado=Math.floor(Math.random()*95);
 return resultado;

 }
 */
