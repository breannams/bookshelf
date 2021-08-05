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


    renderShowPage(attributes){
        genresContainer.innerHTML = ''
        booksContainer.innerHTML = ''
        booksContainer.innerHTML +=
        `
            <h1 id = "specific-genre-name"><u>${this.name}</u></h1>
            <a id = "back-bttn"href ="#">See all Books</a>
        `
        let genreBooksArr = attributes.books

        genreBooksArr.forEach(book=>{
        booksContainer.innerHTML +=
        `
            <ul>
            <li><h2>Title: ${book.title}</h2></li>
            <h3>Written by: ${book.author}</h3>
            <h4>number of pages: ${book.pages}</h4> 
            </ul>
        `

      
        const backBttn = document.getElementById('back-bttn')
        backBttn.addEventListener('click', Genre.goback)
    })
    }

    static goback(){
        booksContainer.innerHTML = ''
        bookService.fetchBooks()
        genreService.fetchGenres()
    }

}
