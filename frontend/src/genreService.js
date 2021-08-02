class GenreService{
    
    ///read
    fetchGenres(){
        fetch(`${base_url}/genres`)
        .then(resp => resp.json())
        .then(genre.renderGenres) //data set gets passed into renderGenres implicitly
    }

}