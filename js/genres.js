// PELIS

let generosP = document.querySelector (".generosP")

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`)
.then(function(response){
    return (response.json());
})

.then(function(dataGenerosP){
    console.log(dataGenerosP);
    let info = dataGenerosP.genres
   

    let lista = ``
    for (let i=0; i<info.length; i++)

    lista += `<a href="">
    <h1 href="detail-genres.html?id=${info[i].id}&genres=${info[i].name}"class="h1genres">${info[i].name}</h1>
</a>`
    console.log (lista)
    generosP.innerHTML = lista

})

.catch(function(error){
    console.log(error);
}) 