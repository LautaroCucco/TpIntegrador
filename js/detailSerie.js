let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);

        let imagen = document.querySelector('.img');
        let original_name = document.querySelector('.TitleName');
        let rating =  document.querySelector('.rating');
        let first_air_date = document.querySelector('.first_air_date');
        let overview =  document.querySelector('.overview');
        let genero = document.querySelector('.genero');

        let generos = '';
        for (let i=0; i<data.genres.length; i++){
            generos += `<article class="DetailPeli">
            <div class="tituloDetail">
                <h2>SERIE</h2>
            </div>
            <div class="ContenedorPeli">
             <span class="portadapeli"><img class="img" src="https://image.tmdb.org/t/p/original${data.poster_path}" alt=""></span> 
    
                <ul class="detallepeli">
                    <p class="TitleName" href="detailGenres.html?id=${data.genres[i].id}&genres=${data.genres[i].name}">${data.genres[i].name}</p>
                    <p class="first_air_date">${data.release_date}</p>
                    <p class="duracion">${data.overview}</p>
                    <p class="genero"><a href="detail-genres.html">Genero:</a></p>
                    <p class="sinopsis">${data.overview}</p>
                    <p class="favbot"><button class="Bfav">Agregar a favoritos</button></p>
              </ul>
            </div>
        </article>`
            console.log(generos);
        }

        imagen.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
        original_name.innerText = data.original_name;
        rating.innerText = `Calificación: ${data.vote_average}`;
        first_air_date.innerText = `Estreno: ${data.first_air_date}`;
        overview.innerText = `${data.overview}`;
        genero.innerHTML = `Genero: ${generos}`;

    })
    .catch(function(error){
        console.log(error);
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

// MOBILE SEARCH
let formularioM = document.querySelector('.formBusquedaMobile');
let inputFieldM = document.querySelector('.searchM');
let messageM = document.querySelector('.messageM');

formularioM.addEventListener('submit', function(evento){
  evento.preventDefault();
  console.log('No se envió')

  if(inputFieldM.value == ""){
    window.alert("Para realizar su busqueda, ingrese minimo 3 caracteres");
  } else if (inputFieldM.value.length < 3) {
    window.alert("Para realizar su busqueda, ingrese minimo 3 caracteres");
  } else {
    this.submit();
  }
})