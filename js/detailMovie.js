let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=aa2ebf30f90eae07fd3d7b8d253f5883&language=en-US`;

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
        let overview =  document.querySelector('.sinopsis');
        let duracion = document.querySelector('.duracion')
        let genero = document.querySelector('.genero');

        let generos = '';
        for (let i=0; i<data.genres.length; i++){
            generos += `<article class="DetailPeli">
            <div class="tituloDetail">
                <h2>PELICULA</h2>
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
        original_name.innerText = data.title;
        rating.innerText = `Calificación: ${data.vote_average}`;
        first_air_date.innerText = `Estreno: ${data.release_date}`;
        overview.innerText = `${data.overview}`;
        duracion.innerText = `Duración: ${data.runtime} min`
        genero.innerHTML = `Genero: ${generos}`;

        

    })
    .catch(function(error){
        console.log(error);
    })

    // detailGenres.html?id=${data.genres[i].id}&genres=${data.genres[i].name}
    // ${data.genres[i].name}
    // `https://image.tmdb.org/t/p/original${data.poster_path}
    // `Calificación: ${data.vote_average}
    // ${data.release_date}
    // ${data.overview}
    // ${data.runtime}
    // ${generos}