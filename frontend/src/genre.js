class Genre{
    constructor({id, name}){
        this.id = id
        this.name = name
    }
  
    
    renderGenres(genres){
        genresContainer.innerHTML += 
            `
           
           <div id = "genre-div">
            <ul>
                <h4 data-id = ${this.id} class = "genre-name"> ${genres.name} </h4>
            </ul> 
           </div>

            `
        const genreNames = document.getElementsByClassName("genre-name")
            
        for (const name of genreNames){
            name.addEventListener('click', genreService.genreShow)
        }
    }

}
