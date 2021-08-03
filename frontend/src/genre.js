class Genre{
    constructor(id, name){
        this.id = id
        this.name = name
    }
  
    
   static renderGenres(genres){
        let genresArr = genres.data
        genresContainer.innerHTML += `<h1 class = 'header'>All Genres: </h1>`
        genresArr.forEach(genre=>{
            let genreDetails = genre.attributes
            genresContainer.innerHTML += 
            `
           
           <div id = "genre-div">
            <ul>
                <h4 data-id = ${genreDetails.id} class = "genre-name"> ${genreDetails.name} </h4>
            </ul> 
           </div>

            `

        })    
  
        const genreNames = document.getElementsByClassName("genre-name")
            
        for (const name of genreNames){
            name.addEventListener('click', genreService.genreShow)
        }
    }


}
