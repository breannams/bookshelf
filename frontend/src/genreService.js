class GenreService{

    ///read
    fetchGenres(){
        fetch(`${base_url}/genres`)
        .then(resp => resp.json())
        .then(genreService.renderGenres) //data set gets passed into renderGenres implicitly
    }
    
    renderGenres(genres){
        let genresArr = genres.data
        genresArr.forEach(genre=>{
            genreService.renderGenre(genre)
        })
    }

    renderGenre(genre){
       // debugger
         let genreDetails = genre.attributes
     
         let genresContainer = document.getElementById("genres-container")
         genresContainer.innerHTML += 
       `
       <strong>${genreDetails.name} | </strong>
       `

}

}