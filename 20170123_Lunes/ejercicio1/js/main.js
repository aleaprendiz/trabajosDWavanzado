/*
alert("Si funciona JavaScript");
document.write("Contenido desde JS");
console.log("Desde console");
document.getElementById('titulo').innerHTML="Este es el segundo titulo";
*/

//solo una línea
//Definición de variables
/*
var x,y,z;
x = 5;
y = 6.3;
z = x+y;

alert(z);

//Definición de funcioes
function tuNombreCompleto(nombre, apellido)
{
  var nombreCompleto = nombre + " " + apellido;
  document.write(nombreCompleto);
  return nombreCompleto;
}

var alumno = tuNombreCompleto("Isela","García");

alert(alumno);
*/

//Crear Objetos
/*
var miPrimerObjeto = {nombre:"Isela", apellido:"Garcia"};
alert(miPrimerObjeto.nombre);
*/

var persona = "Jorge";
var otraPersona = persona;
persona = "Amanda";

//document.write(persona);
//document.write(otraPersona);

/*
var persona = {nombre:"Jorge"};
var otraPersona2 = persona;
persona.nombre = "Amanda";
document.write(persona.nombre);
document.write(otraPersona2.nombre);
*/
/*
var fruta = {
    nombre : "mango",
    color : "amarillo",
    dulce : 8,
    queDulceSoy:function(){
      alert("Soy muy dulce");
    }
}

fruta.queDulceSoy();
*/

//Hacer referencia a los id's y clases de CSS
/*
alert("Retardo");
document.getElementById('primero').innerHTML+="Isela García";
*/

/*
document.getElementById('botonConClick').onclick=function(){
  //alert("No me clickees, siento cosquillas");
  document.getElementById('aparecerTexto').innerHTML="Este era un texto invisible";
  document.getElementById('aparecerTexto').style.color="blue";
}

document.getElementById('botonConClick2').onclick=function(){
  //alert("No me clickees, siento cosquillas");
    document.getElementById('aparecerTexto').innerHTML='<p class="texto">Texto con CSS</p>';
//  document.getElementById('aparecerTexto').innerHTML="Texto con CSS";
//  document.getElementById('aparecerTexto').style.cssText = "color:blue; background-color:red;";

}
*/

/*
var nombre = "primero";
document.getElementById('priboton').onclick=function(){
  document.getElementById(nombre).innerHTML="Si resulto";
}
*/

document.getElementById('priboton').onclick=function(){
  var valor = document.getElementById('miInput').value;
  document.getElementById('vacio').innerHTML=valor;
}
