class GenreService{

    //read


    fetchGenres(){
         fetch(`${base_url}/genres`)
        .then(resp => resp.json())
        .then(genre =>
            {
                let genreArr = genre.data
                genresContainer.innerHTML += `<h1 class = 'header'>All Genres: </h1>`
                for (const genre of genreArr){
                    let attributes = genre.attributes
                    const g = new Genre(attributes)
                    g.renderGenre()
                }
            })
    }
    
  
    genreShow(){
      
        let genreId = parseInt(event.target.dataset.id)
        fetch(`${base_url}/genres/${genreId}`)
        .then(resp => resp.json())
        .then(genre => {
            let attributes = genre.data.attributes
            const g = new Genre(attributes)
            g.renderShowPage()

           let genreBooksArr = attributes.books

            genreBooksArr.forEach(book=>{
            booksContainer.innerHTML +=
            `
                <ul>
                <li><h2>Title: ${book.title}</h3></li>
                <h3>Written by: ${book.author}</h3>
                <h4>number of pages: ${book.pages}</h5> 
                </ul>
            `
      })

    })

    }
    goback(){
        booksContainer.innerHTML = ''
        bookService.fetchBooks()
        genreService.fetchGenres()
    }
}

