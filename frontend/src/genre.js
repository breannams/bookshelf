class Genre{
    constructor(name){
        this.name = name
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
       <div id = "genre-names">
       <strong>${genreDetails.name} | </strong>
       </div>
       `

}
 }