function agregarPelicula(){
    var peliculaFavorita = document.getElementById('pelicula').value
    var elementoListaPeliculas = document.getElementById('listaPeliculas')
    elementoListaPeliculas.innerHTML = elementoListaPeliculas.innerHTML + '<img src=' + peliculaFavorita + '>'
    document.getElementById('pelicula').value = ''
  }