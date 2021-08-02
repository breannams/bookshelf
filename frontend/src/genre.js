class Genre{
    constructor(id, name){
        this.id = id
        this.name = name
    }
  

    renderGenres(genres){
        let genresArr = genres.data

        let genresContainer = document.getElementById("genres-container")

        genresArr.forEach(genre=>{
            let genreDetails = genre.attributes
            genresContainer.innerHTML += 
            `
            <div id = "genre-names" data-id = ${genreDetails.id}>
            <strong>${genreDetails.name} | </strong>
            </div>
            `
         
        })
        
    }


}
