const base_url = "http://127.0.0.1:3000"
const bookService = new BookService


//const addNewBookBttn = document.getElementById("add-new-book")
// const genreInput = document.getElementById("genre_id")
// let genresContainer = document.getElementById("genres-container")
let booksContainer = document.getElementById("books-container")



// const genreService = new GenreService
// const genre = new Genre




// genreService.fetchGenres()
bookService.fetchBooks()
Book.newBookForm()

