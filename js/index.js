// PELICULAS POPULARES 
fetch('https://api.themoviedb.org/3/movie/popular?api_key=aa2ebf30f90eae07fd3d7b8d253f5883')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let infoPP = data.results;
  let peliculasSeries = document.querySelector('.peliculasSeries');
  let articulosPeliculasP = '';

  for (let i=0; i<4; i++){
      articulosPeliculasP += `<article>
                                    <a class="" href="detail-movie.html?id=${infoPP[i].id}">
                                        <h3 href="detail-movie.html">${infoPP[i].title} (${infoPP[i].release_date})</h3> 
                                    </a>
                                    <img class="img" src="https://image.tmdb.org/t/p/original${infoPP[i].poster_path}" alt="">
                                </article>`
                            
  }
  peliculasSeries.innerHTML = articulosPeliculasP;
})
.catch(function(error) {
  console.log("Error: " + error);
})

// LO MAS VISTO EN PELICULAS
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=aa2ebf30f90eae07fd3d7b8d253f5883')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let infoPV = data.results;
  let peliculasV = document.querySelector('.peliculasV');
  let articulosPeliculasV = ('');

  for (let i=0; i<5; i++){
      articulosPeliculasV+=
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=aa2ebf30f90eae07fd3d7b8d253f5883')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let infoPV = data.results;
  let peliculasV = document.querySelector('.peliculasV');
  let articulosPeliculasV = ('');

  for (let i=0; i<4; i++){
      articulosPeliculasV+= ` <section class="peliculasSeries peliculasV">
                                <article>
                                    <a href="detail-movie.html?id=${infoPV[i].id}">
                                        <h3 href="detail-movie.html">${infoPV[i].title} (${infoPV[i].release_date}) </h3>
                                    </a>
                                    <img class="img" src="https://image.tmdb.org/t/p/original${infoPV[i].poster_path}" alt="">
                                </article> 
                            </section>`
  }
  peliculasV.innerHTML = articulosPeliculasV;
})
.catch(function(error) {
  console.log("Error: " + error);
})

  }
  peliculasV.innerHTML = articulosPeliculasV;
})
.catch(function(error) {
  console.log("Error: " + error);
})

//SERIES POPULARES
fetch('https://api.themoviedb.org/3/tv/popular?api_key=aa2ebf30f90eae07fd3d7b8d253f5883')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let infoSP = data.results;
  let peliculasSeriesSP = document.querySelector('.seriesP');
  let articulosSeriesP = ('');

  for (let i=0; i<4; i++){
      articulosSeriesP+= `<section class="peliculasSeries peliculasV">
                                <article>
                                    <a href="detail-series.html?id=${infoSP[i].id}">
                                        <h3 href="detail-series.html">${infoSP[i].name} (${infoSP[i].first_air_date})</h3>
                                    </a>
                                    <img class="img" src="https://image.tmdb.org/t/p/original${infoSP[i].poster_path}" alt="">
                                </article> 
                        </section>`
  }
  peliculasSeriesSP.innerHTML = articulosSeriesP;
})
.catch(function(error) {
  console.log("Error: " + error);
})

// SEARCH
let formulario = document.querySelector('form');
let inputField = document.querySelector('.search');
let message = document.querySelector('.message');

formulario.addEventListener('submit', function(evento){
  evento.preventDefault();
  console.log('No se envió')

  if(inputField.value == ""){
    window.alert("Para realizar su busqueda, ingrese minimo 3 caracteres");
  } else if (inputField.value.length < 3) {
    window.alert("Para realizar su busqueda, ingrese minimo 3 caracteres")
  } else {
    this.submit();
  }
})

