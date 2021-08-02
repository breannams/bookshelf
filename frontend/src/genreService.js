class GenreService{

    ///read
    fetchGenre(genre){
        
       return fetch(`${base_url}/genres/${genre}`)
        .then(resp => resp.json())
        .then(genre.showGenre) //data set gets passed into renderGenres implicitly
    }
    


}