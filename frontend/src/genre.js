class Genre{
  
    constructor({id, name}){
        this.id = id
        this.name = name

        this.element = document.createElement('h4')

        
    }
  
    genreHTML(){
       
        this.element.innerHTML +=
        `
        <div id = "genre-div" data-id = ${this.id} class = "genre-name">
            ${this.name} 
       </div>
        `
        return this.element
    }
    
 
    renderGenre(){
   
     genresContainer.append(this.genreHTML()) 

        const genreNames = document.getElementsByClassName("genre-name")
            
        for (const name of genreNames){
            name.addEventListener('click', genreService.genreShow)
        }
    }

}
