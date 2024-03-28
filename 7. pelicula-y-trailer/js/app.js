var listaPeliculasFavoritas = [];
var listaTrailersPeliculasFavoritas = [];

function añadirPelícula(){
  var peliculaFavorita = document.getElementById('pelicula').value;
  var trailerPeliculasFavoritas = document.getElementById('trailer').value;
  
    if(( peliculaFavorita.endsWith('jpg') ) || ( peliculaFavorita.endsWith('jpeg') )){
      
      document.getElementById('mensajeDeError').innerHTML = '';
      listaPeliculasFavoritas.push(peliculaFavorita);
      listaTrailersPeliculasFavoritas.push(trailerPeliculasFavoritas);
      
      limpiarCampos();
      recargarPeliculas();
      
    } else {
      
      document.getElementById('mensajeDeError').innerHTML = 'Dirección de imagen no válida, inténtalo de nuevo';
      limpiarCampos();
      
    }
  }

/*function recargarPeliculas(){
 
  var elementoListaPeliculas = document.getElementById('listaPeliculas');
    elementoListaPeliculas.innerHTML = '';
    
    for (var i = 0; i < listaPeliculasFavoritas.length; i++) {
        var peliculaHTML = '<div>';
        peliculaHTML += '<a href="' + listaTrailersPeliculasFavoritas[i] + '">';
        peliculaHTML += '<img src="' + listaPeliculasFavoritas[i] + '">';
        peliculaHTML += '</a>';
        peliculaHTML += '</div>';
        elementoListaPeliculas.innerHTML += peliculaHTML;
    }
}*/

function recargarPeliculas(){
 
  var elementoListaPeliculas = document.getElementById('listaPeliculas');
  elementoListaPeliculas.innerHTML = '';
  for(i=0; i < listaPeliculasFavoritas.length ; i++){
    elementoListaPeliculas.innerHTML += `<a href=" ${listaTrailersPeliculasFavoritas[i]} "><img src=" ${listaPeliculasFavoritas[i]} "></a>`;
    
  }
}

function  limpiarCampos(){
   document.getElementById('pelicula').value = '';
   document.getElementById('trailer').value = '';
}