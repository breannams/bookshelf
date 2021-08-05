const base_url = "http://127.0.0.1:3000"
const bookService = new BookService
const genreService = new GenreService

let booksContainer = document.getElementById("books-container")
let genresContainer = document.getElementById("genres-container")


genreService.fetchGenres()
bookService.fetchBooks()
Book.handleForm()
