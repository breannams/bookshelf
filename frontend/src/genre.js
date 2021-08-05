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


    renderShowPage(){

        booksContainer.innerHTML = ''
        booksContainer.innerHTML +=
        `
            <h1 id = "specific-genre-name"><u>${this.name}</u></h1>
            <a id = "back-bttn"href ="#">See all Books</a>
        `

        genresContainer.innerHTML = ''
        const backBttn = document.getElementById('back-bttn')
        backBttn.addEventListener('click', genreService.goback)

    }

}
