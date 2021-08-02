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
            <div data-id = ${genreDetails.id}>
           <h4 class = "genre-names" > <strong>${genreDetails.name} | </strong></h4>
            </div>
            `
        })
        const genreNames = document.getElementsByClassName("genre-names")
        for (const genreName of genreNames){
        genreName.addEventListener("click", genre.showGenre)}
    }

    showGenre(){
        debugger
    }


}
