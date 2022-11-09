// PELIS

let generosP = document.querySelector (".generosP")

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=aa2ebf30f90eae07fd3d7b8d253f5883&language=en-US`)
.then(function(response){
    return (response.json());
})

.then(function(dataGenerosP){
    console.log(dataGenerosP);
    let info = dataGenerosP.genres
   

    let lista = ``
    for (let i=0; i<info.length; i++)

    lista += `<section>
    <a class="ab" href="detail-genres.html?id=${info[i].id}&genres=${info[i].name}">
        <h3 class="generosP"> ${info[i].name}</h3>
    </a>
    </section>`
    console.log (lista)
    generosP.innerHTML = lista

})
// 
//

.catch(function(error){
    console.log(error);
})

// SERIES 

let generosTV = document.querySelector (".generosTV")

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=aa2ebf30f90eae07fd3d7b8d253f5883&language=en-US`)
.then(function(response){
    return (response.json());
})

.then(function(dataGenerosTV){
    console.log(dataGenerosTV);
    let info = dataGenerosTV.genres;
   

    let lista = ``
    for (let i=0; i<info.length; i++)
    lista += `<section>
              <a class="ab" href="detail-genres.html?id=${info[i].id}&genres=${info[i].name}">
                  <h3 class="generosTV">${info[i].name}</h3>
              </a>
              </section>`
    console.log (lista)
    generosTV.innerHTML = lista

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