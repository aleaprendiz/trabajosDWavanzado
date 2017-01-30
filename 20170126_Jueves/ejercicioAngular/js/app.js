//Archivo angular
(function(){
'use strict';
//Aunque es una sola linea, tambien  se utiliza dando salto de line antes de cada punto

//nombre
angular
      //Dependencias
.module("myApp", [])
.controller("movieCtrl", movieCtrl);

function movieCtrl(){
  var movie = this;

//Arreglo en formato JSON
/*
  movie.nombre =
  [{'nombre':'Luis','edad':19},
  {'nombre': 'Donaldo', 'edad':21}]
*/

movie.collection = [
{'img': 'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2014/01/finding-nemo-poster.jpg',
'name' : 'Finging Nemo',
'cast': ['nemo', 'dory'],
'year': 2010,
'categoria': 'Infantil'
},

/**/
{
  'img':'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2014/01/wall-e-poster.jpg',
  'name':'WALL-E',
  'cast': ['wall-e', 'eva'],
  'year':2000,
  'categoria':'Infantil'
},
/**/

{
  'img':'https://s-media-cache-ak0.pinimg.com/736x/06/bd/29/06bd29c0eb6ae6241377d9bdaaffc560.jpg',
  'name':'Up',
  'cast': ['x','y'],
  'year': 2015,
  'categoria':'Infantil'
},
/**/
{
  'img':'https://s-media-cache-ak0.pinimg.com/736x/6d/71/e7/6d71e72ccb7199f965f6b8106267a8e8.jpg',
  'name':'Inside Out',
  'cast': ['Disgusto', 'Ira', 'Alegria', 'tristeza' ],
  'year':2016,
  'categoria':'Infantil'
},

/**/


{
  'img':'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2014/01/ratatouille-poster.jpg',
  'name':'RATATOULLE',
  'cast': ['raton1','raton1','humano1','humano2'],
  'year': 2014,
  'categoria':'Infantil'
}
/**/
];
}
/**/
})();
