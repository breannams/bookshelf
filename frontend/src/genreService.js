class GenreService{

    ///read


    fetchGenres(){
        fetch(`${base_url}/genres`)
        .then(resp => resp.json())
        .then(genre.renderGenres) //data set gets passed into renderGenres implicitly
    }
    

    genreShow(){
        let genreId = parseInt(event.target.dataset.id)
      
        fetch(`${base_url}/genres/${genreId}`)
        .then(resp => resp.json())
        .then(genre.showGenre)
    }
}