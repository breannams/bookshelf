class GenreService{

    //read


    fetchGenres(){
        fetch(`${base_url}/genres`)
        .then(resp => resp.json())
        .then(Genre.renderGenres) //data set gets passed into renderGenres implicitly
    }
    
  
    genreShow(){
      
        let genreId = parseInt(event.target.dataset.id)
     
        fetch(`${base_url}/genres/${genreId}`)
        .then(resp => resp.json())
    
      .then(genre => {
        let genreDetails = genre.data.attributes
      let genreBooksArr = genreDetails.books
      booksContainer.innerHTML = ''
      booksContainer.innerHTML +=
      `
      <h1 id = "specific-genre-name"><u>${genreDetails.name}</u></h1>
      <a id = "back-bttn"href ="#">See all Books</a>
      
      `
      genreBooksArr.forEach(book=>{
          booksContainer.innerHTML +=
          `
          <ul>
          <li><h3>Title:${book.title}</h3></li>
          <h4>Written by: ${book.author}</h3>
          <h5>number of pages: ${book.pages}</h5> 
          </ul>
          `
      })

      genresContainer.innerHTML = ''
      const backBttn = document.getElementById('back-bttn')
      backBttn.addEventListener('click', genreService.goback)
    })

    }
    goback(){
        booksContainer.innerHTML = ''
        bookService.fetchBooks()
        genreService.fetchGenres()
    }
}

