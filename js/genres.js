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

    lista += 
    console.log (lista)
    generosP.innerHTML = lista

})

.catch(function(error){
    console.log(error);
}) 