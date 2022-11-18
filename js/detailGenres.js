// Pelis

let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
let genero = qsto.get('genres')

let titulo = document.querySelector ('.tituloPrincipal')
    titulo.innerText = genero

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=aa2ebf30f90eae07fd3d7b8d253f5883&with_genres=${id}`;

console.log (url)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
    console.log(data);
    let results = data.results;
    let pelicula = document.querySelector ('.generosP')
    let articulo = '';
    
    for (let index = 0; index < 4; index++) {
        console.log(results [index].poster_path);

        articulo += `<section class="peliculasSeries generosP">
        <article>
            <a href="./detail-movie.html?id=${results[index].id}"><h3>${results[index].title} (${results[index].release_date})</h3></a>
            <img class="img" src="https://image.tmdb.org/t/p/original${results[index].poster_path}" alt="Movie">
        </article>
        </section>`
        pelicula.innerHTML=articulo
    }})

    // ${results[index].title}
    // ./detailMovie.html?id=${results[index].id}
    // "https://image.tmdb.org/t/p/original${results[index].poster_path}"
    // ${results[index].release_date}

    let urlTV = `https://api.themoviedb.org/3/discover/tv?api_key=aa2ebf30f90eae07fd3d7b8d253f5883&with_genres=${id}`;

console.log (urlTV)

fetch(urlTV)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
    console.log(data);
    let resultsTV = data.results;
    let series = document.querySelector ('.generosTV')
    let articuloTV = '';
    
    for (let index = 0; index < 4; index++) {
        console.log(resultsTV [index].poster_path);

        articuloTV +=`<section class="peliculasSeries generosTV">
        <article>
            <a href="./detail-series.html?id=${resultsTV[index].id}"><h3>${resultsTV[index].name} (${resultsTV[index].first_air_date})</h3></a>
            <img class="img" src="https://image.tmdb.org/t/p/original${resultsTV[index].poster_path}" alt="Serie">
        </article>
        </section>`
        series.innerHTML=articuloTV
    
    }})

    // ${resultsTV[index].name}
    // ./detailSeries.html?id=${resultsTV[index].id}
    // "https://image.tmdb.org/t/p/original${resultsTV[index].poster_path}
    // ${resultsTV[index].first_air_date}


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

