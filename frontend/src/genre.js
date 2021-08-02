class Genre{
    constructor(id, name){
        this.id = id
        this.name = name
    }
  
    
    renderGenres(genres){
        let genresArr = genres.data

        genresArr.forEach(genre=>{
            let genreDetails = genre.attributes
            genresContainer.innerHTML += 
            `
            <div class = "genre-div"  onclick = "genreService.genreShow()">
           <h4 data-id = ${genreDetails.id} > ${genreDetails.name} | </h4>
            </div>
            `
           
        })
        
    }

  showGenre(genre){
      debugger
  }


}
